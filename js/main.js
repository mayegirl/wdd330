var notes = ["Week 1", "Week 2", "Week 3"];
var i, len, text;
for (i = 0, len = notes.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;