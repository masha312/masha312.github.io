var map;
var markers = [];

 function initMap() {
  var boston = {lat: 42.3601, lng: -71.0589};
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: boston});
}

const showStreets = () => {
  deleteMarkers();
  var day = document.getElementById("weekdaySelect").value;
  getStreets(day);
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

const getStreets = (day) => {
  fetch('streets3.json')
    .then(response => {
      //Convert the response to JSON
      return response.json();
  })
  .then(addresses => {
    for (var i = 0; i < addresses.length; i=i+120) {
      if (addresses[i].Trash === day) {
        var markerLocationRaw = addresses[i].Location;
        var markerLocationArray = markerLocationRaw.replace(/\(|\)/g, "").match(/-?\d+(?:\.\d+)?/g).map(Number);
        console.log(markerLocationArray);
        var trashIconLat = markerLocationArray[0];
        var trashIconLng = markerLocationArray[1];
        var marker = {lat: trashIconLat, lng: trashIconLng};
        var markerGoogle = new google.maps.Marker({position: marker, map: map, icon: 'trash.svg'});
        markers.push(markerGoogle);
        console.log(addresses[i])
      }
    }
  } );
}

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "weekday-dropdown":*/
x = document.getElementsByClassName("weekday-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
