import { displayModal } from './utilities.js';

// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        // listElement.innerHTML = quakeList.features
        listElement.innerHTML = quakeList.features
            .map(quake => {
                const time = new Date(quake.properties.time);
                return `
                <li class="listItem" data-id="${quake.id}">
                    <span class="title">
                        ${quake.properties.title}
                    </span>
                    <span class="date">
                        ${time.getHours()}:${time.getMinutes()}
                    </span>
                </li>`;
            })
            .join('');
    }

    /**
     * 
     * @param {*} quake 
     * @param {*} element 
     */
    renderQuake(quake, element) {
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
        displayModal();
        console.log('quake:', quake); // DEBUG
        const quakeProperties = Object.entries(quake.properties);
        console.log('quakeProperties:', quakeProperties); // DEBUG

        let html = '';

        for (const [key, val] of quakeProperties) {
            html += `<p>${key}: ${val}</p>`;
        }

        element.innerHTML = html;
    }
}