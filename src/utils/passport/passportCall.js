// const passport = require('passport')


// const passportCall = strategy =>{
//     return async(req,res,next)=>{
//         passport.authenticate(strategy, function(err,user,info){
//             console.log(user)
//             if(err) return next(err)
//             if(!user) return res.status(401).send({error: info.toString()})
//             req.user = user
//             next()
//         })(req, res,next)
//     }
// }

// module.exports = 
//     passportCall
