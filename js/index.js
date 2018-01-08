$(function() {  
  var DEFAULT_ZOOM = 4;
  var GOOGLE_API_KEY= 'AIzaSyDq6a9lCfiJD2D_tUQ3GeOOv5z1wHIqHRQ';
  function initMap() {
        var position = 
        {
         lat: 37.773972,
         lng: -122.43129
        };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: DEFAULT_ZOOM , 
          center: position
        });
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });
    
    $.ajax({
     url:'/places-info',
     data: {
      'lat' :position.lat,
      'lng': position.lng,
      'type':'restaurant',
      'key':GOOGLE_API_KEY,
      'radius':500
      },
     success:function(data){
           debugger;
     },
     fail:function(err){
           debugger;
    }
    });
   }
    initMap();
});
