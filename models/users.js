'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = Schema({
  email:{type: String, unique: true, lowercase:true},
  username:String,
  pass:{type: String, select: false},
  signupDate:{ type: Date, default: Date.now },
  lastLogin: Date
});

userSchema.pre('save', function(next){
  let user = this;
  if(!user.isModified('pass')) return next();

  bcrypt.genSalt(10, (err, salt)=>{
    if(err) return next();

    bcrypt.hash(user.pass, salt, null, (err, hash) => {
      if (err) return next(err);

      user.pass=hash;
      next();
    })
  })
})

module.exports=mongoose.model('User', userSchema);
