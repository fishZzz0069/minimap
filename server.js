var express = require('express')
var app = express();
var port = 8080 ;
var path = require('path');
var request = require('request');

var GOOGLE_KEY= 'AIzaSyDq6a9lCfiJD2D_tUQ3GeOOv5z1wHIqHRQ';
var place_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.get('/places-info',function(req,api_res){
       var radius = req.query.radius ? req.query.radius :150;
       var params = {
       'key':GOOGLE_KEY,
       'location':req.query.lat + ',' + req.query.lng,
       'radius':radius,
       'tyoe':req.query.type
       };
       request({url: place_url ,qs:params},function(err,res,body){
       console.log(res);
       if(res.statusCode == 200){
          console.log(body);
          api_res.json(body);
       }
     });
});

app.use('/js', express.static(path.join(__dirname,'js')))
app.use('/css', express.static(path.join(__dirname,'css')))
app.listen(port, () => console.log('Example app listening on port' + port+ '!'))
