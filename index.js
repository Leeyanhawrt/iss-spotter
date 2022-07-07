// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error)
//     return
//   }
//   console.log('It worked! Returned IP:', ip)
// })

// fetchCoordsByIP('99.227.49.150', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error)
//     return
//   }
//   console.log('It worked! Returned coordinates:', data)
// })

// fetchISSFlyOverTimes({ latitude: '43.653226', longitude: '-79.3831843' }, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error)
//     return
//   }
//   console.log('It worked! Fly over times:', flyOverTimes)
// })

const { nextISSTimesForMyLocation } = require('./iss')

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0)
    datetime.setUTCSeconds(pass.risetime)
    const duration = pass.duration
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error)
  }
  printPassTimes(passTimes)
})
