var map;
var markers = [];
const daysOfTheWeek = document.querySelectorAll('input[name="choice"]');

function initMap() {
  var boston = {lat: 42.3601, lng: -71.0589};
  map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: boston});
  var today;
  switch (new Date().getDay()) {
    case 1:
      today = "M";
      break;
    case 2:
      today = "T";
      break;
    case 3:
      today = "W";
      break;
    case 4:
      today = "TH";
      break;
    case 5:
      today = "F";
      break;
  }
  if (today !== null) {
    for (const dayOfWeek of daysOfTheWeek) {
       if (dayOfWeek.value === today) {
           dayOfWeek.checked = true;
           break;
       }
    }
    showStreets();
  }
}

const showStreets = () => {
  deleteMarkers();
  var daySelected;
  for (dayOfWeek of daysOfTheWeek) {
     if (dayOfWeek.checked) {
         daySelected = dayOfWeek.value;
         break;
     }
  }
  getStreets(daySelected);
}


function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function clearMarkers() {
  setMapOnAll(null);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
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

const getStreets = (day) => {
  toggleLoading(true);
  fetch('streets.json')
    .then(response => {
    return response.json();
  })
  .then(addresses => {
    for (var i = 0; i < addresses.length; i=i+120) {
      if (addresses[i].Trash.includes(day)) {
        if (!(day == "T" && addresses[i].Trash == "TH")) {
          var markerLocationRaw = addresses[i].Location;
          var markerLocationArray = markerLocationRaw.replace(/\(|\)/g, "").match(/-?\d+(?:\.\d+)?/g).map(Number);
          var trashIconLat = markerLocationArray[0];
          var trashIconLng = markerLocationArray[1];
          var marker = {lat: trashIconLat, lng: trashIconLng};
          var markerGoogle = new google.maps.Marker({position: marker, map: map, icon: 'trashfreerunmarker.svg'});
          markers.push(markerGoogle);
        }
      }
    }
    toggleLoading(false);
  });
}
