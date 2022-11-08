const Spot = require('../../models/Spot')
const aws = require('aws-sdk')
const fs = require('fs')


module.exports = {
    index,
    create,
    update,
    delete: deleteOne
}

async function index(req, res) {
    let spots = await Spot.find({})
    res.json(spots)
}

const s3 = new aws.S3({
    accessKeyId: process.env.S3_ACCESS_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION
})

async function create(req, res) { 
    function uploadFile(file) {
        const fileStream = fs.createReadStream(file.path)
        const uploadParams = {
            Bucket: 'skatespotter',
            Body: fileStream,
            Key: file.filename
        }
        console.log("made it to s3.upload(upload params...")
        return s3.upload(uploadParams).promise()
        
    }
    const file = req.file
    const result = await uploadFile(file)
    console.log("finished s3.upload")
    
    fs.unlink(req.file.path, async function (err) {
        if (err)
            return res.status(400).json({ success: false, message: err.message })
        console.log("no error during unlink, made it here")
        let spot = new Spot({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            photoUrl: result.Location
        })
        console.log("created a new spot")
        await spot.save(); 
        console.log("saved it")
        res.json(spot)
    })
}

async function update(req, res) {
    let spot = await Spot.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        address: req.body.address
    })
    res.json(spot)
}

async function deleteOne(req, res) {
    let spot = await Spot.findByIdAndDelete(req.params.id)
    res.json(spot)
}