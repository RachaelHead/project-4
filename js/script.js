
  // The location of Uluru
  var machuPicchu = {
    lat: -13.1631412,
    lng: -72.5471516
  };


  function initMap() {

    // The map, centered at Machu Picchu
    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 4,
          center: machuPicchu
    });//close map

    // The marker, positioned at Machu Picchu
    var marker = new google.maps.Marker({
      position: machuPicchu,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: ''
    });//close marker


    //street view

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: machuPicchu,
          pov: {
            heading: 160,
            pitch: 10
          }
        });//close panorama
    map.setStreetView(panorama);


} // close initMap


$(function(){

  console.log('scripts loaded');

  //urls of Incan objects
  var object1= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/319574';
  var object2= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/319524';
  var object3= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/307846';
  var object4= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/307449';
  var object5= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/308083';
  var object6= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/308079';
  var object7= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309528';
  var object8= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313324';
  var object9= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313152';
  var object10= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/315708';
  var object11= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/315690';
  var object12= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/315773';
  var object13= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/314617';
  var object14= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/314616';
  var object15= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/314615';
  var object16= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/314614';
  var object17= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/316928';
  var object18= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/316938';
  var object19= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/307941';
  var object20= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/314528';
  var object21= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/316926';
  var metObjectArray = [object1, object2, object3, object4, object5, object6, object7, object8, object9, object10, object11, object12, object13, object14, object15, object16, object17, object18, object19, object20, object21];

  var data = [];
  var html = '';

  for (i=0;i<metObjectArray.length; i++){

    $.ajax({
      type: 'GET',
      url: metObjectArray[i],
      data: data,
      dataType: 'json',
      async: true,
      success: function(data){
        console.log(data);

        html += '<div class="object">';
        html +=   '<div class="image">';
        html +=     '<img src="' + data.primaryImage + '"></img>';
        html +=   '</div>';
        html += '</div>';

        $("#met").html(html);

      }//close success

    });// close ajax

  }//close for loop

});//close wrapper
