const _ = require('lodash')

// profileCtrl.js
var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
    getProfiles: (req, res, next) => {
        let friends;
        if (req.query.name) {
         firends = _.filter(profiles, profile => profile.name.includes(req.query.name))
        } else if (req.query.status) {
//            user = _.filter(profiles, profile => profile.status === req.query.status)
            friends = _.filter(profiles, profile => profile.status.includes(req.query.status))
        } else friends = profiles;
        
        return res.send({message: friends})
    }
    
}