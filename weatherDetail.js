const request = require('request');


var feel=(lng,lat,callback)=>
                {
                    request(
                                {
                                    url: `https://api.darksky.net/forecast/cb61e9c278d6c17a47fee7369e4a87a5/${lat},${lng}`,
                                    json:true
                                },
                                
            
                                (error,response,body)=>
                                {
                                    if(error)
                                    {
                                        callback(`Invalid url`,undefined);
                                    }
                                    else if(body.code==400)
                                    {
                                        callback(`time and location is invalid`,undefined);
                                    }
                                    else{
                                        var temp=(body.currently.temperature - 32)*5/9;

                                        callback(undefined,
                                                           {
                                                               TimeZone : body.timezone,
                                                               Summary : body.currently.summary,
                                                               Temperature: temp,
                                                               Humidity : body.currently.humidity,
                                                               uvIndex : body.currently.uvIndex,

                                                           })
                                    }
                                    
                                }
                            );
                }            



                    


module.exports=
                {
                    feel     
                }            