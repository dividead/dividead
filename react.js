var Div = React.createClass({
  getInitialState: function(){
    return {posts: null}
  },
  loadPosts: function(){
    var self = this
    var xmlhttp
    xmlhttp=new XMLHttpRequest()
    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState==4 && xmlhttp.status==200){
        self.setState({posts: JSON.parse(xmlhttp.responseText)})
      }
    }
    xmlhttp.open("GET", "/posts.json", true)
    xmlhttp.send()
  },
  componentWillMount: function(){
    this.loadPosts()
    //setInterval(this.loadPosts, 60000)
  },
  render: function(){
    return this.state.posts ?  <Post posts={this.state.posts} /> : null
  }
})

var Post = React.createClass({
  render: function(){
    var posts = this.props.posts.map(function(x){
      return (
        <article key={x.id}>
          <header>
            <h1>{x.title}</h1>
          </header>
          <div className="post-content">
            <p>{x.text}</p>
          </div>
        </article>
        )
    })
    return (
      <div>
        {posts}
      </div>
    )
  }
})

React.render(
  <Div />,
  document.getElementById('content')
)