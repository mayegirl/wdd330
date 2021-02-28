const notes = [
    {
        label: "Week 1 Notes",
        url: "Week1.html"
    },
    {
        label: "Week 2 Notes",
        url: "Week2.html"
    },
    {
        label: "Week 3 Notes",
        url: "Week3.html"
    },
    {
        label: "Week 4 Notes",
        url: "Week4.html",
    },
    {
        label: "Week 5 Notes",
        url: "Week5.html",
    },
    {
        label: "Week 7 Notes",
        url: "Week7.html",
    }
    {
        label: "Week 8 Notes",
        url: "Week8.html",
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