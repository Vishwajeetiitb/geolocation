
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
var a =0;
var b =0;
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16
        });
        infoWindow = new google.maps.InfoWindow;
                  // Try HTML5 geolocation.
      }
       function autoupdate(){
        // body...
        if (navigator.geolocation) {
          var i = 1;
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            document.getElementById("t").value = position.coords.latitude + ", " + position.coords.longitude;
            a = position.coords.latitude;
            b = position.coords.longitude;
            infoWindow.setPosition(pos); 
            infoWindow.setContent("vishwa");
            console.log(i)
            infoWindow.open(map);
            // map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        }
         else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        // Your web app's Firebase configuration
      
        // firebase.analytics();
        
        testRef = database.ref('vishwajeet');
        testRef.set({
           lat:  a,
           lng: b,
          //   moment: now.valueOf()
         });
    
      


      

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

      }
      i = i+1;  
      console.log(a);

      setTimeout(autoupdate,1000);
    }
    autoupdate();

    