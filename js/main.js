var notes = ["Week 1", "Week 2", "Week 3"];
const links = [
    {
        label: "Week 1 notes",
        url: "Week1.html"
    }
]

function myFunction{
    var i, len, text;
    for (i = 0, len = notes.length, text = ""; i < len; i++) {
      //  text += notes[i] + "<br>";
        var a = document.createElement("a");
        var link = document.createTextNode(notes[i] + ".html");
        a.appendChild(link);
        a.title = text;
        a.href = link;
        document.body.appendChild(a);
    };
}
