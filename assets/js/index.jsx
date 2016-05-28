require('bootstrap-loader');
require("css/style.scss")

var React = require('react')
var ReactDOM = require('react-dom')

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = $.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

csrftoken = getCookie('csrftoken');

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="author">
                    {this.props.author}
                </h2>
                <div className="comment-text">
                    {this.props.children}
                </div>
            </div>
        )
    }
})

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        })
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
})

var CommentForm = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''}
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value})
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value})
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
          return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name.."
                    value={this.state.author}
                    onChange={this.handleAuthorChange}/>
                <input
                    type="text"
                    placeholder="Say something"
                    value={this.state.text}
                    onChange={this.handleTextChange}/>
                <button type="submit" value="Post">Submit!</button>
            </form>
        )
    }
})

var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []}
    },
    loadDataFromServer: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    onCommentSubmit: function(comment) {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'POST',
          data: comment,
          beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
          },
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadDataFromServer()
        setInterval(this.loadDataFromServer, this.props.pollInterval)
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments!</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.onCommentSubmit}/>
            </div>
        );
    }
})

ReactDOM.render(<CommentBox url="/1/allcomments" pollInterval={2000}/>, document.getElementById('react-app'))




