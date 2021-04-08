import { getJSON, getLocation } from './utilities.js';
import  QuakesController from './QuakesController.js';


// 11,372 quakes
let baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// 22 quakes
let abelHome = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-03-08&endtime=2021-03-09&latitude=33.517323499999996&longitude=-117.1025403&maxradius=1';

// getJSON(baseUrl);

// navigator.geolocation.getCurrentPosition(pos => console.log(pos));

//const quakeListUl = document.getElementById('quakeList');
const quakesController = new QuakesController('#quakeList');
quakesController.init();


