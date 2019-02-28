
const geo=require('./geocode');
const weather=require('./weatherDetail');
const yargs=require('yargs');
const argv=yargs
                .option({
                            a:{
                                    demand:true,
                                    alias:'address',
                                    describe:'address for weather',
                                    string:true
                              }                           
                        })

                .help()
                .alias('help','h')
                .argv;

geo.GEOCODE(argv.address,(error,result)=>
                                                {
                                                      if (error)
                                                            {
                                                                  console.log(error)
                                                            }
                                                      else  { 
                                                                   console.log(JSON.stringify(result,undefined,2));
                                                            }      
                                                      weather.feel(result.longitude,result.latitude,(error,result)=>
                                                                                                                        {
                                                                                                                              if(error)
                                                                                                                              {
                                                                                                                                    console.log(error);
                                                                                                                              }
                                                                                                                              else
                                                                                                                              {
                                                                                                                                    console.log(JSON.stringify(result,undefined,2));
                                                                                                                              }

                                                                                                                        }
                                                                  );
                                                });
