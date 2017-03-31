var users = [
  {
    id: 1,
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    id: 2,
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    id: 3,
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    id: 4,
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

    getUsers: function(req, res, next) {
        console.log(req.session.currentUser)
        return res.status(200).json(users);
    },
    
    getOneUser: function(req, res, next) {
      console.log(req.params)
      var user = users.filter(oneUser => oneUser.id === parseInt(req.params.id))
      return res.status(200).json(user)
    },
    
    login : function(req,res,next){
        var filteredUsers = users.filter(oneUser => oneUser.name === req.body.name && oneUser.password === req.body.password)
        
        
        console.log(req.session)
        
        if (filteredUsers.length) {
            req.session.currentUser = filteredUsers[0];
            // This endpoint sends a response back to the caller, either Postman or line 6 of the friend service
            return res.status(200).json({message: "User found"});            
        } else {
            return res.status(401).json({message: "User not found"});            
            
        }
        
    },
    
    getLoggedUser: function(req,  res, next) {
        return res.status(200).json(req.session.currentUser)
    }

};


