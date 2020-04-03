import mapboxgl from 'mapbox-gl';



const initMapbox = () => {
  // console.log("coucouinit");
  // const mapElement = document.getElementById('map');

  // if (mapElement) { // only build a map if there's a div#map to inject into
  //   mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  //   const map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 9 // starting zoom
  //   });
  // }

    mapboxgl.accessToken = "<%= ENV['MAPBOX_API_KEY'] %>";
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
};



export { initMapbox };
