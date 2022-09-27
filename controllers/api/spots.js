const Spot = require('../../models/Spot')

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

async function create(req, res) {
    let spot = await new Spot({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
    })
    await spot.save();
    res.json(spot)
}

async function update(req, res) {
    let spot = await Spot.findByIdAndUpdate ( req.params.id, {
        name: req.body.name,
        description: req.body.description,
        address: req.body.address
    })
    res.json(spot)
}

async function deleteOne(req, res) {
    let spot = await Spot.findByIdAndDelete (req.params.id)
    res.json(spot)
}