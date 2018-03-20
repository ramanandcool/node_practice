 const geocode = require('./geocode.js');
 const weather = require('./weather.js');
 const yargs = require('yargs');
 const argv=yargs
 .option({
    a:{
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for',
      string:true
       }
     })
     .help()
     .alias('help','h')
     .argv;

geocode.geocode(argv.address,(errormess,results)=>{
if (errormess) {
  console.log(errormess);
}else {
  console.log(results.address);
  weather.getWeather(results.latitude,results.longitude,(errormess,weatherResults)=>{
  if (errormess) {
    console.log(errormess);
  }else {
    console.log(`Its currently ${weatherResults.temperature}.and it's fell like ${weatherResults.apparentTemperature}`);
  }
  });

}
});
