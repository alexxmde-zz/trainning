var CommentBox = React.createClass({
  render: function() {
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );

  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <Comment author="Alex Alonso">Eae Negads</Comment>
        <Comment author="Josias O Louco">Paga o homem do lanche, caloteiro</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return(
    <div className="commentForm">
      Hello, world! I am a CommentForm.
    </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup};
  },

  render: function () {
    var md = new Remarkable();
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});


ReactDOM.render(<CommentBox />, 
  document.getElementById("content"));

