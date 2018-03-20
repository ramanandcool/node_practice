const request = require('request');
var getWeather =(lat,lng,callback)=>{
request({
  url:`https://api.darksky.net/forecast/4369bf7eef9faa8e4d700b18077a9884/${lat},${lng}`,
  json:true},
(error,response,body)=>{
  if (error) {
    callback('unable to connect forecast servers.');
  }
  else if (response.statusCode===400) {
      callback('unable to fetch weather'+lat);

  }else if(response.statusCode===200) {
  callback(undefined,{temperature:body.currently.temperature,apparentTemperature:body.currently.apparentTemperature});

  }
});
};
module.exports.getWeather=getWeather;
