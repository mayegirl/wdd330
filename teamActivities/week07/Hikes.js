import Comments from "./Comments.js";

const hikeList = [
  {
    name: "Bechler Falls",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description:
      "Beautiful short hike along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
  },
  {
    name: "Teton Canyon",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
  },
  {
    name: "Denanda Falls",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    difficulty: "Moderate",
    description:
      "Beautiful hike through Bechler meadows river to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
  }
];


export default class Hikes {
  constructor() {
    this.comments = new Comments("hikes");
  }

  showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    this.renderHikeList(hikeList, hikeListElement);
    this.comments.renderCommentList();
    document.getElementById('commentsH2').style.visibility = 'visible';
  }
  
  imgBasePath = "//byui-cit.github.io/cit261/examples/";  
  
  renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(this.renderOneHike(hike));
    });
  }


  renderOneHike(hike) {
    const item = document.createElement("li");

    item.innerHTML = ` <h2>${hike.name}</h2>
                      <div class="image">
                        <img src="${this.imgBasePath}${hike. imgSrc}" alt="${hike.imgAlt}">
                        </div>
                      <div>
                              <div>
                                  <h3>Distance</h3>
                                  <p>${hike.distance}</p>
                              </div>
                              <div>
                                  <h3>Difficulty</h3>
                                  <p>${hike.difficulty}</p>
                              </div>
                      </div>`;
    item.addEventListener("click", () => {this.renderOneHikeDetails(hike)});

    return item;
  }

  renderOneHikeDetails(hike) {
    // clear the list of all comments
    document.getElementById('allComments').innerHTML = '';
    document.getElementById('commentsH2').style.visibility = 'hidden';

    const item = document.createElement("li");

    item.innerHTML = `<h2>${hike.name}</h2>
                      <div class="image">
                        <img src="${this.imgBasePath}${hike. imgSrc}"
                            alt="${hike.imgAlt}">
                      </div>
                      <div>
                        <div>
                            <h3>Distance</h3>
                            <p>${hike.distance}</p>
                        </div>
                        <div>
                            <h3>Difficulty</h3>
                            <p>${hike.difficulty}</p>
                        </div>
                        <div>
                          <h3>Description</h3>
                          <p>${hike.description}</p>
                        </div>
                        <div>
                          <h3>Directions</h3>
                          <p>${hike.directions}</p>
                        </div>
                        <h3>Comments</h3>
                        <div>
                          <label for="comment">
                            <textarea name="comment" id="comment"
                                cols="100" rows="10"></textarea>
                          </label>
                          <button id="addComment">Add comment</button>
                        </div>
                        <div id="comments"></div>
                      </div>`;

    const button = document.createElement("button");
    button.innerText = "Back";
    // NOTE: The next 2 lines do the same thing (slightly different syntax)
    // button.addEventListener("click", () => {this.showHikeList()});
    button.onclick = () => {this.showHikeList()};
    item.appendChild(button);

    const hikes = document.getElementById("hikes");
    hikes.innerHTML = "";
    hikes.appendChild(item);
    
    this.comments.renderCommentListByName(hike.name);
    document.getElementById('addComment').addEventListener('click',
        (event) => {
          let content = document.getElementById('comment').value;
          if (content) {
            this.comments.addComment(hike.name, content);
            this.comments.renderCommentListByName(hike.name);
          }
        })
  };
}
