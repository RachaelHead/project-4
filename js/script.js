
  // The locations
  var machuPicchu = {
    lat: -13.1631412,
    lng: -72.5471516
  };

  var cuscoCitySquare = {
    lat: -13.5168236,
    lng: -71.9790029
  };




    // The map, centered at Machu Picchu
    var map = new google.maps.Map(
        document.getElementById('big-map'), {
          zoom: 4,
          center: machuPicchu
    });//close map

    var marker1 = new google.maps.Marker({
      position: cuscoCitySquare,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: ''
    });//close marker

    //shape

    // Define the LatLng coordinates for the polygon's path.
    var empireCoords = [
      {lat: 1.559829, lng: -78.989244},
      {lat: 0.981642, lng:  -76.324366},
      {lat: -2.5456491, lng: -75.7562099},
      {lat: -2.171240, lng: -77.662903},
      {lat: -5.063275,lng:  -78.130839},
      {lat: -5.656196, lng:  -77.670287},
      {lat: -5.739603,  lng: -76.719467},
      {lat: -6.479062,  lng: -76.045514},
      {lat: -7.363231, lng:  -76.205597},
      {lat: -8.852017, lng:  -75.852173},
      {lat: -9.564806, lng: -74.881637},
      {lat: -10.507772, lng:  -74.749240},
      {lat: -11.077693,  lng:  -74.490429},
      {lat: -11.016860, lng: -73.657276},
      {lat: -11.203184, lng:   -73.210634},
      {lat: -11.744455, lng:  -72.870818},
      {lat: -11.380662, lng:   -72.176674},
      {lat: -11.644480,  lng:  -71.613347},
      {lat: -12.539197,  lng:  -71.289643},
      {lat: -14.765036, lng:  -67.708335},
      {lat: -16.158788, lng:   -65.329268},
      {lat: -17.715863, lng:   -64.904487},
      {lat: -22.025556,  lng:   -65.329820},
      {lat: -23.907807, lng: -65.752557},
      {lat: -25.364617,  lng: -65.231245},
      {lat: -27.627925, lng:  -66.362081},
      {lat: -29.298748, lng:    -68.759568},
      {lat: -30.430610, lng:  -68.814722},
      {lat: -32.610200, lng:  -70.177381},
      {lat:-34.181236, lng: -69.847118},
      {lat: -35.802139, lng: -72.501315 },
      {lat: -34.151133,  lng: -71.991064},
      {lat: -33.617284, lng: -71.592321},
      {lat: -33.110427, lng:  -71.699636},
      {lat: -32.385563,  lng: -71.426263},
      {lat: -31.160423, lng:  -71.681949},
      {lat: -30.249921, lng:  -71.643856},
      {lat: -30.177113, lng:  -71.461229},
      {lat: -30.009914, lng:  -71.380548},
      {lat:-29.596270, lng:  -71.275413},
      {lat: -29.232693, lng:  -71.461104 },
      {lat: -28.876730, lng: -71.499905},
      {lat: -27.639039,  lng: -70.895136},
      {lat: -27.164049,lng:  -70.931919},
      {lat: -26.022304, lng:  -70.639156},
      {lat: -25.784559, lng: -70.726984},
      {lat: -25.558136, lng:  -70.651512},
      {lat:-25.422126, lng:  -70.451039},
      {lat: -23.865160, lng:  -70.514462},
      {lat: -22.987760, lng:  -70.320419},
      {lat: -20.571127,  lng:  -70.172649},
      {lat: -18.356273, lng: -70.371614},
      {lat: -17.663890,  lng:  -71.312766},
      {lat: -17.332920, lng:  -71.408975},
      {lat: -15.371948, lng: -75.162022},
      {lat: -13.883049,  lng:  -76.390015},
      {lat: -12.486317,  lng:  -76.791189},
      {lat: -12.414763,  lng: -76.778425},
      {lat: -12.273262,  lng: -76.883338},
      {lat: -12.195589, lng:  -77.044757},
      {lat: -12.134915,  lng: -77.034807},
      {lat: -12.069303,  lng:  -77.163860},
      {lat: -11.589693,  lng: -77.276322 },
      {lat: -11.467235,  lng:  -77.350474},
      {lat: -11.297581,  lng:  -77.648400},
      {lat: -11.219494,  lng: -77.644242 },
      {lat: -11.173840,  lng:  -77.594923},
      {lat: -10.843453,  lng:  -77.722627},
      {lat: -10.107024,  lng:  -78.184270},
      {lat: -10.084703,  lng:  -78.167056},
      {lat: -9.856168,  lng: -78.242037},
      {lat: -9.798699,  lng: -78.227441},
      {lat: -8.456333,  lng:  -78.896999},
      {lat: -6.759783,  lng:  -79.986102},
      {lat: -5.998294,  lng: -81.137287},
      {lat: -4.661166, lng:  -81.306308},
      {lat: -4.231621,  lng:  -81.229405},
      {lat: -2.640135,  lng:  -79.759498 },
      {lat: -2.715860,   lng: -80.266939},
      {lat: -2.2278276,   lng: -80.9659767},
      {lat: -1.969065,  lng:  -80.757149},
      {lat: -1.602420,  lng:  -80.849295 },
      {lat: -1.476388,  lng:-80.789997},
      {lat: -1.357109,  lng:  -80.734708},
      {lat: -1.054543,   lng:  -80.909310},
      {lat: -0.957039,   lng:  -80.832193},
      {lat: -0.899739,  lng:  -80.555797},
      {lat: -0.373173,   lng:  -80.483736},
      {lat: 0.054778,  lng:  -80.067693 },
      {lat: 0.679315,   lng:   -80.099300},
      {lat: 0.822230,   lng:  -80.052359},
      {lat: 0.991416,  lng:  -79.654633},
      {lat: 1.371370,    lng:  -78.904452},
      {lat: 1.430158,    lng:  -78.809703},
      {lat: 1.645750,    lng: -79.005708}
    ];//close polygon coordinates

    // Construct the polygon.
    var incaEmpire = new google.maps.Polygon({
      paths: empireCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });

    incaEmpire.setMap(map);

    //click function for marker
    marker1.addListener('click', function() {
    console.log('marker1 clicked');

    var map = new google.maps.Map(
        document.getElementById('big-map'), {
          zoom: 8,
          center: cuscoCitySquare
    });//close map

    var marker1 = new google.maps.Marker({
      position: cuscoCitySquare,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: ''
    });//close marker

    //shape

    // Define the LatLng coordinates for the polygon's path.
    var empireCoords = [
      {lat: 1.559829, lng: -78.989244},
      {lat: 0.981642, lng:  -76.324366},
      {lat: -2.5456491, lng: -75.7562099},
      {lat: -2.171240, lng: -77.662903},
      {lat: -5.063275,lng:  -78.130839},
      {lat: -5.656196, lng:  -77.670287},
      {lat: -5.739603,  lng: -76.719467},
      {lat: -6.479062,  lng: -76.045514},
      {lat: -7.363231, lng:  -76.205597},
      {lat: -8.852017, lng:  -75.852173},
      {lat: -9.564806, lng: -74.881637},
      {lat: -10.507772, lng:  -74.749240},
      {lat: -11.077693,  lng:  -74.490429},
      {lat: -11.016860, lng: -73.657276},
      {lat: -11.203184, lng:   -73.210634},
      {lat: -11.744455, lng:  -72.870818},
      {lat: -11.380662, lng:   -72.176674},
      {lat: -11.644480,  lng:  -71.613347},
      {lat: -12.539197,  lng:  -71.289643},
      {lat: -14.765036, lng:  -67.708335},
      {lat: -16.158788, lng:   -65.329268},
      {lat: -17.715863, lng:   -64.904487},
      {lat: -22.025556,  lng:   -65.329820},
      {lat: -23.907807, lng: -65.752557},
      {lat: -25.364617,  lng: -65.231245},
      {lat: -27.627925, lng:  -66.362081},
      {lat: -29.298748, lng:    -68.759568},
      {lat: -30.430610, lng:  -68.814722},
      {lat: -32.610200, lng:  -70.177381},
      {lat:-34.181236, lng: -69.847118},
      {lat: -35.802139, lng: -72.501315 },
      {lat: -34.151133,  lng: -71.991064},
      {lat: -33.617284, lng: -71.592321},
      {lat: -33.110427, lng:  -71.699636},
      {lat: -32.385563,  lng: -71.426263},
      {lat: -31.160423, lng:  -71.681949},
      {lat: -30.249921, lng:  -71.643856},
      {lat: -30.177113, lng:  -71.461229},
      {lat: -30.009914, lng:  -71.380548},
      {lat:-29.596270, lng:  -71.275413},
      {lat: -29.232693, lng:  -71.461104 },
      {lat: -28.876730, lng: -71.499905},
      {lat: -27.639039,  lng: -70.895136},
      {lat: -27.164049,lng:  -70.931919},
      {lat: -26.022304, lng:  -70.639156},
      {lat: -25.784559, lng: -70.726984},
      {lat: -25.558136, lng:  -70.651512},
      {lat:-25.422126, lng:  -70.451039},
      {lat: -23.865160, lng:  -70.514462},
      {lat: -22.987760, lng:  -70.320419},
      {lat: -20.571127,  lng:  -70.172649},
      {lat: -18.356273, lng: -70.371614},
      {lat: -17.663890,  lng:  -71.312766},
      {lat: -17.332920, lng:  -71.408975},
      {lat: -15.371948, lng: -75.162022},
      {lat: -13.883049,  lng:  -76.390015},
      {lat: -12.486317,  lng:  -76.791189},
      {lat: -12.414763,  lng: -76.778425},
      {lat: -12.273262,  lng: -76.883338},
      {lat: -12.195589, lng:  -77.044757},
      {lat: -12.134915,  lng: -77.034807},
      {lat: -12.069303,  lng:  -77.163860},
      {lat: -11.589693,  lng: -77.276322 },
      {lat: -11.467235,  lng:  -77.350474},
      {lat: -11.297581,  lng:  -77.648400},
      {lat: -11.219494,  lng: -77.644242 },
      {lat: -11.173840,  lng:  -77.594923},
      {lat: -10.843453,  lng:  -77.722627},
      {lat: -10.107024,  lng:  -78.184270},
      {lat: -10.084703,  lng:  -78.167056},
      {lat: -9.856168,  lng: -78.242037},
      {lat: -9.798699,  lng: -78.227441},
      {lat: -8.456333,  lng:  -78.896999},
      {lat: -6.759783,  lng:  -79.986102},
      {lat: -5.998294,  lng: -81.137287},
      {lat: -4.661166, lng:  -81.306308},
      {lat: -4.231621,  lng:  -81.229405},
      {lat: -2.640135,  lng:  -79.759498 },
      {lat: -2.715860,   lng: -80.266939},
      {lat: -2.2278276,   lng: -80.9659767},
      {lat: -1.969065,  lng:  -80.757149},
      {lat: -1.602420,  lng:  -80.849295 },
      {lat: -1.476388,  lng:-80.789997},
      {lat: -1.357109,  lng:  -80.734708},
      {lat: -1.054543,   lng:  -80.909310},
      {lat: -0.957039,   lng:  -80.832193},
      {lat: -0.899739,  lng:  -80.555797},
      {lat: -0.373173,   lng:  -80.483736},
      {lat: 0.054778,  lng:  -80.067693 },
      {lat: 0.679315,   lng:   -80.099300},
      {lat: 0.822230,   lng:  -80.052359},
      {lat: 0.991416,  lng:  -79.654633},
      {lat: 1.371370,    lng:  -78.904452},
      {lat: 1.430158,    lng:  -78.809703},
      {lat: 1.645750,    lng: -79.005708}
    ];

    // Construct the polygon.
    var incaEmpire = new google.maps.Polygon({
      paths: empireCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });//close polygon
    incaEmpire.setMap(map);

  });// close marker1 click function




//YOUTUBE API
// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '-uR88wDML8Q',
        playerVars: {
          'cc_load_policy':1,
          'cc_lang_pref': 'en',
          autoplay : 0
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {

    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
      }
    }

    //plays video when you mouse over #video

    $('#video')
    .mouseenter(function() {
      player.playVideo();
    })
    .mouseleave(function() {
     player.stopVideo();
    });

// END YOUTUBE API

// SCROLLMAGIC
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // page header
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#header',
      offset: 350
    })
    .setClassToggle('#header', 'fade-out') //main header fade in
    .addTo(controller);

    // empire header
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#map-header'
    })
    .setClassToggle('#map-header', 'fade-in') // map header fade in
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#map-header'
    })
    .setClassToggle('#map-info', 'fade-in') // map info fade in
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#map-header'
    })
    .setClassToggle('body', 'white') //make background white when you get to the map section
    .addTo(controller);

    // art header
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#art-section',
      offset: 150
    })
    .setClassToggle('#art-section', 'fade-in') // art section fade in
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#art-section',
    })
    .setClassToggle('body', 'tan') // make background tan when you get to the art intro
    .addTo(controller);

    //player
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#video'
    })
    .setClassToggle('body', 'black') //make background black
    .addTo(controller);

    // met header
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#met-intro'
    })
    .setClassToggle('#met-intro', 'fade-in') //met header fade in
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#met-intro'
    })
    .setClassToggle('body', 'tan-again') //make background white
    .addTo(controller);


$(function(){

  console.log('scripts loaded');

  //MET API

  //urls of textiles
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

  // Array of Gold objects
  var gold1= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/312801';
  var gold2= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309943';
  var gold3= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309960';
  var gold4= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/315622';
  var gold5= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/308123';
  var gold6= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309944';
  var gold7= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/315492';
  var gold8= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/312558';
  var gold9= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/317753';
  var gold10= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313273';
  var gold11= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313271';
  var gold12= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313223';
  var metGoldArray = [gold1, gold2, gold3, gold4, gold5, gold6, gold7, gold8, gold9, gold10, gold11, gold12];

  // Array of ceramic objects
  var ceramic1= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313341';
  var ceramic2= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/310702';
  var ceramic3= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/310520';
  var ceramic4= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/319319';
  var ceramic5= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/317751';
  var ceramic6= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313274';
  var ceramic7= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313289';
  var ceramic8= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/313205';
  var ceramic9= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/310233';
  var ceramic10= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309389';
  var ceramic11= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309401';
  var ceramic12= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/309753';
  var ceramic13= 'https://collectionapi.metmuseum.org/public/collection/v1/objects/310205';
  var metCeramicsArray = [ceramic1, ceramic2, ceramic3, ceramic4, ceramic5, ceramic6, ceramic7, ceramic8, ceramic9, ceramic10, ceramic11, ceramic12, ceramic13];


    //click TEXTILES button
    $('#textiles-button').click(function(){
        console.log('button clicked');
    // variables
    var data = [];
    var html = '';
    //for loop running through the array of textiles
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
            html += '<a href="' + data.objectURL +'" target="_blank">';
            html +=   '<div class="image">';
            html +=     '<img src="' + data.primaryImage + '"></img>';
            html +=   '</div>';
            html += '</a>';
            html +=   '<div class="object-info">';
            html +=     '<h3>'+ data.title +'</h3>';
            html +=     '<p><b>Date: </b>'+ data.objectDate +'</p>';
            html +=     '<p><b>Material: </b>'+ data.medium +'</p>';
            html +=   '</div>';
            html += '</div>';


            $("#met").html(html);

          }//close success
        });// close ajax
      }//close for loop
    });// close click function



    //click GOLD button


    $('#gold-button').click(function(){
        console.log('gold button clicked');
    //variables
    var data = [];
    var html = '';
    //for loop looping through metGoldArray
      for (i=0;i<metGoldArray.length; i++){
        $.ajax({
          type: 'GET',
          url: metGoldArray[i],
          data: data,
          dataType: 'json',
          async: true,
          success: function(data){
            console.log(data);

            html += '<div class="object">';
            html += '<a href="' + data.objectURL +'" target="_blank">';
            html +=   '<div class="image">';
            html +=     '<img src="' + data.primaryImage + '"></img>';
            html +=   '</div>';
            html += '</a>';
            html +=   '<div class="object-info">';
            html +=     '<h3>'+ data.title +'</h3>';
            html +=     '<p><b>Date: </b>'+ data.objectDate +'</p>';
            html +=     '<p><b>Material: </b>'+ data.medium +'</p>';
            html +=   '</div>';
            html += '</div>';

            $("#met").html(html);

          }//close success
        });// close ajax
      }//close for loop
    });// close click function



    //click CERAMICS button

    $('#ceramics-button').click(function(){
        console.log('gold button clicked');
    //variables
    var data = [];
    var html = '';
    //for loop looping through metCeramicsArray
      for (i=0;i<metCeramicsArray.length; i++){
        $.ajax({
          type: 'GET',
          url: metCeramicsArray[i],
          data: data,
          dataType: 'json',
          async: true,
          success: function(data){
            console.log(data);

            html += '<div class="object">';
            html += '<a href="' + data.objectURL +'" target="_blank">';
            html +=   '<div class="image">';
            html +=     '<img src="' + data.primaryImage + '"></img>';
            html +=   '</div>';
            html += '</a>';
            html +=   '<div class="object-info">';
            html +=     '<h3>'+ data.title +'</h3>';
            html +=     '<p><b>Date: </b>'+ data.objectDate +'</p>';
            html +=     '<p><b>Material: </b>'+ data.medium +'</p>';
            html +=   '</div>';
            html += '</div>';

            $("#met").html(html);

          }//close success
        });// close ajax
      }//close for loop
    });// close click function



});//close wrapper
