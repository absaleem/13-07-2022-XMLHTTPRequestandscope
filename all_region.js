//console.log("Hello guvi");
//API:application programming interface


//XML-HTTP REQUEST:
//it is used to interact with the server via API
//It has 4 steps


//Step 01:create a XHR object
//this is the starting point for the connection
var request=new XMLHttpRequest();
//Step 02:opening a connection
//Two parameters:
//first parameters:"HTTP METHOD"
//second parameters:"api-url"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//Step 03:sending the connection
//its creates a path between client and server
request.send();
//step 04:once the data successfully loaded from her server
request.onload=function(){
    //the data coming from ther server is of type string.
    //so to convert string to the array of object
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log("Name:"+result[i].name+", Regions:"+result[i].name+", subregion:"+result[i].subregion+", population:"+result[i].population);
    }
}