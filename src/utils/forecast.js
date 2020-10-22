const request = require('request')


const forecast = (latitude, longitude, callback) => {
 
    const url = `http://api.weatherstack.com/current?access_key=0c9c8816938e3651a3e64be7e8e3b889&query=${latitude},${longitude}&units=m`
    const options = {url: url, json: true}

    request(options, (error, {body}) => {
       if (error) {
        callback('Unable to connect to weather service !', undefined)
       } else if (body.error) {
        callback('Unable to find location', undefined)
       } else {
           callback(undefined, 
            body.current.temperature
           )
       }
        })
    }

module.exports = forecast