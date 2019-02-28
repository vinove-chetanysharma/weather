
const request=require('request');





var GEOCODE=(addr,callback)=>  {
                                var Uaddress=encodeURIComponent(addr);

                                request(
                                            {
                                                url: `http://www.mapquestapi.com/geocoding/v1/address?key=wig0fZSwNeczAeyxpsh5liz5vVlopMqv&location=${Uaddress}`,
                                                json:true
                                            }, 
                                            (error,response,body)=>
              
                                                    { debugger
                                                            if(error)
                                                                        {
                                                                            callback('Invalied Url !',undefined);
                                                                        }
                                                             else if(body.info.statuscode==400)
                                                                        {
                                                                            callback('Unable to fetch data',undefined);
                                                                        }
                                                            else
                                                            {
                                                                             callback(undefined,{
                           
                                                                                                    address: body.results[0].providedLocation.location,
                                                                                                    longitude : body.results[0].locations[0].latLng.lng,
                                                                                                    latitude:   body.results[0].locations[0].latLng.lat
                         
                                                                                                 })
                   
                                                            }
                                                    }
                                        );                       
                                    };  
                                    
                                    
                                   
module.exports= {
                    GEOCODE
                };




             