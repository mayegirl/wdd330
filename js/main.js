var notes = [
    {
        heading: '<li>"Week 1"</li>', '<li>"Week 2"</li>', '<li>"Week 3"</li>',
        links: [
            '<a href = "Week1.html">Week 1</a>',
            '<a href = "Week2.html">Week 2</a>',
            '<a href = "Week3.html">Week 3</a>'
];

function myFunction{
    var html = "";
    for( var i = 0; i < notes.length; i++ ){
        var note = notes[i];
        html += note.heading + note.links.join("");
    }
    document.getElementById('demo').innerHTML = html;
    };
}
