'use strict'
module.exports={
  port : process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://rpi:raspberrypi3@ds249092.mlab.com:49092/bdalquiler',
  SECRET_TOKEN: 'secrettoken'
}
