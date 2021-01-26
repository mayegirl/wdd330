console.log("Testing javasc");

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
]
function myFunction{
    var i, len, text;
    for(i = 0; len = notes.length; i++){
        var li = document.createElement("LI");
        var a = document.createElement("a");
        a.setAttribute("href", notes[i].url());
        a.innerHTML = notes[i].label();
        document.getElementById("demo");
    }
}