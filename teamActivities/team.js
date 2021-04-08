const notes = [
    {
        label: "Week 2",
        url: "week02/index.html"
    },
    {
        label: "Week 3",
        url: "week03/index.html"
    },
    {
        label: "Week 3, part 2",
        url: "week03/index2.html"
    },
    {
        label: "Week 4",
        url: "week04/index.html"
    },
    {
        label: "Week 5",
        url: "week05/index.html"
    },
    {
        label: "Week 7",
        url: "week07/index.html"
    },
    {
        label: "Week 8",
        url: "week08/index.html"
    },
    {
        label: "Week 9",
        url: "week09/index-START.html"
    },
    {
        label: "Week 10",
        url: "week10/index.html"
    },
    {
        label: "Week 11",
        url: "week11/public/index.html"
    },
    {
        label: "Main Idex",
        url: "index.html"
    }
]
function myFunction(){
    var i, text;
    var ol = document.getElementById("demo");
    for(i = 0; notes.length; i++){
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", notes[i].url);
        a.innerHTML = notes[i].label;
        li.appendChild(a);
        ol.appendChild(li);
    }
}

myFunction();