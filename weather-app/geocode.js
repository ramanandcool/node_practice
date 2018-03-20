const request = require('request');
var geocode=(address,callback)=>{
  var encodedURL=encodeURIComponent(address);
  request({
  url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}`,
  json:true
},(error,response,body)=>{
  // console.log(JSON.stringify(bod));
  if(error){
    callback('unable to connect google servers');
  }else if(body.status==='ZERO_RESULTS'){
    callback("please enter valid address");
  }else if (body.status==='OK') {
    callback(undefined,{
      address:body.results[0].formatted_address,
      latitude:body.results[0].geometry.location.lat,
      longitude:body.results[0].geometry.location.lng
    });

  }
  else {
    console.log('something went wrong');
  }
});
};
  module.exports.geocode=geocode;
