var initialize = function() {
  var london = {lat: 51.509865, lng: -0.118092, name: "London", description: "London is the capital and most populous city of England and the United Kingdom."};
  var wimbledon = {lat: 51.434291, lng: -0.214488, name: "Wimbledon", description: "Wimbledon is a district of southwest London, England, 7.1 miles (11.4 km) south-west of the centre of London at Charing Cross, in the London Borough of Merton, south of Wandsworth, northeast of New Malden, northwest of Mitcham, west of Streatham and north of Sutton. Wimbledon had a population of 68,187 in 2011 which includes the electoral wards of Abbey, Dundonald, Hillside, Trinity, Village, Raynes Park and Wimbledon Park." };
  var edinburgh = {lat: 55.9533, lng: -3.1883, name: "Edinburgh", description: "Edinburgh is the capital city of Scotland and one of its 32 council areas. It is located in Lothian on the Firth of Forth's southern shore."}
  var mapDiv = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv, london, 10);
  mainMap.addMarker(london);
  mainMap.addMarker(wimbledon);
  mainMap.addMarker(edinburgh);
  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var takeMeToEdinburghButton = document.querySelector('#button-edinburgh');
  takeMeToEdinburghButton.addEventListener('click', mainMap.edinburghMarker.bind(mainMap));
}

window.addEventListener('load', initialize);


// Add a button below the map that says 'Take me to Chicago' (or another city) which moves the center of the map to be the co-ordinates of that city. Tip: look up the 'setCenter' method for Google Maps.