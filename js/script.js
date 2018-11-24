
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

  var url= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/1'
  var data = [];
  var html = '';
  var objects = [];

  $.ajax({
    type: 'GET',
    url: url,
    data: data,
    dataType: 'json',
    async: true,
    success: function(data){
      console.log(data);
    }//close success

  });// close ajax

});//close wrapper
