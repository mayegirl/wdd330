export default class Comments {
  constructor(type) {
    this.type = type;
    this.comments = [];
    this.getAllComments();
  }

  getAllComments() {
    this.comments = JSON.parse(localStorage.getItem("comments_" + this.type));
    // ternary operator
    this.comments =
        this.comments ?
        this.comments.filter((c) => c.type === this.type) :
        [];
  }

  saveAllComments() {
    localStorage.setItem("comments_" + this.type, JSON.stringify(this.comments));
  }

  renderCommentList() {
    const commentsDiv = document.getElementById("allComments");
    commentsDiv.innerHTML = '';
    for (const c of this.comments) {
      const p = document.createElement("p");
      p.innerText = `${c.name}: ${c.content} (${c.date})`;
      commentsDiv.appendChild(p);
    }
  }

  renderCommentListByName(name) {
    const commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML = '';
    for (const c of this.comments) {
      if (c.name === name){
        const p = document.createElement("p");
        p.innerText = c.content + " (" + c.date + ")";
        commentsDiv.appendChild(p);
      }
    }
  }

  addComment(name, content) {
    this.comments.push({
      name: name,
      date: new Date(),
      content, // shortcut for    content: content
      type: this.type,
    });
    this.saveAllComments();
  }
}