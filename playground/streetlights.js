var map, heatmap;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 42.352989, lng: -71.070870},
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],
    mapTypeId: 'terrain'
  });

  getLights();

}

const toggleLoading = state => {
  var bodyContainer = document.getElementById("bodyContainer");
  if (state) {
    var bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.classList.add('loading');
  } else {
    bodyContainer.classList.remove('loading')
  }
}

const getLights = () => {
  toggleLoading(true);
  fetch('streetlight-locations.geojson')
    .then(response => {
    return response.json();
  })
  .then(geodata => {
    var heatmapData = [];
    for (var i = 0; i < geodata.features.length; i++) {
      var coords = geodata.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      heatmapData.push(latLng);
    }
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: true,
      map: map
    });
    heatmap.set('radius', 10);
    changeGradient();

});
}

const changeGradient = () => {
  var gradient = [
    'rgb(36,47,62)',
    'rgb(54,64,65)',
    'rgb(72,82,67)',
    'rgb(91,99,69)',
    'rgb(109,116,72)',
    'rgb(127,134,75)',
    'rgb(145,151,77)',
    'rgb(164,168,79)',
    'rgb(182,186,82)',
    'rgb(200,203,84)',
    'rgb(218,220,87)',
    'rgb(237,238,90)',
    'rgb(255,255,92)',
  ]
  heatmap.set('gradient', gradient);
  toggleLoading(false);
}

/* ANIMATION FOR LOADER 3 */
const darkeryellow = '#6d7448';
const yellow = '#ffff5c';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const squares3 = document.querySelectorAll(".cube-3");
squares3.forEach((square, index) => {
  square.animate(
    [
      {backgroundColor: darkeryellow, opacity: 0},
      {backgroundColor: yellow, opacity: 0.6},
      {backgroundColor: darkeryellow, opacity: 0}
    ],
    {

      delay: 500 * index,
      duration: 800,
      iterations: Infinity,
      direction: 'alternate',
      fill: 'forwards'
    }
  )
});

const loader3 = document.querySelectorAll(".cubes-wrapper-3");
loader3.forEach((loader, index) => {
  const startRotation = random(0, 180);
  const endRotation = startRotation + 180;
  loader.animate(
    [
      {transform: `rotateX(${startRotation}deg) rotateY(${startRotation}deg)`},
      {transform: `rotateX(${endRotation}deg) rotateY(${endRotation}deg)`},
    ],
    {
      duration: 4000,
      iterations: Infinity,
      fill: 'forwards',
      direction: 'alternate'
    }
  )
});
/*
      function eqfeed_callback(geodata) {
        var heatmapData = [];
        for (var i = 0; i < geodata.features.length; i++) {
          var coords = geodata.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1], coords[0]);
          heatmapData.push(latLng);
        }
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          dissipating: false,
          map: map
        });
      }
*/
