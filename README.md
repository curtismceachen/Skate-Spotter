## Skate Spotter

This app is something I'm continuing to add to, and is designed to allow skateboarders to share skateboard spots, whether it be a handrail, set of stairs, or skatepark for example, with the rest of the skateboarding community. This way, when someone is in a new city and looking to get their shred on, they can simply open Skate Spotter and check for local skate spots.


#### Technologies Used

This app uses the MERN-stack (MongoDB/Mongoose, Express, React, Node), and does Amazon Web Services S3 image uploading using Multer. It uses token-based authentication for user signup and login. Much of the styling was done using Bootstrap.


#### Getting Started

The app is deployed to Heroku and can be found at this link: https://blooming-wildwood-28468.herokuapp.com/spots

Once an account has been created and signed into, you can access the index view and create view via the nav bar, as shown below. Spots can be updated/edited simply by clicking the update button for that spot, and filling out the drop-down form.

<p float="middle">
    <img src="/public/images/ssidxview.PNG?raw=true" width="30%" height="30%">
    <img src="/public/images/sscreateview.PNG?raw=true" width="30%" height="30%">
</p>

#### Next Steps/Current Tasks

Currently completing browser-based geolocation for each skateboard spot. The ability to search and filter skateboard spots by name or location will also be added.