import Hikes from "./hiking-start.js"

const hikesObj = new Hikes();
    
//on load grab the array and insert it into the page
window.addEventListener("load", () => {hikesObj.showHikeList()});
