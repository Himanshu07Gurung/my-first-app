import React, { Component } from "react";
import { $posts } from '../../actions';
import history from '../../history';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postsList: []
		};
	}

  componentDidMount() {
    this.getPostLists()
  }

  getPostLists(){
    $posts.postsList().then(res => {
      this.setState({
        postsList: res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  singlePost(id){
    history.push('/post/'+id);
  }

  newPost(){
    history.push('/new-post');
  }

  render() {
    return(
      <div style={{ paddingTop: '40px'}}>
        <ul className="w3-ul w3-hoverable  w3-card-4 w3-large">
          {this.state.postsList.map((post) =>
            <li className="w3-display-container" key={post.id}>
              {post.title}
              <span className="w3-button w3-display-right">
                <i onClick={() => this.singlePost(post.id)} className="fa fa-arrow-right" />
              </span>
            </li>
          )}
        </ul>
        <div className="w3-bottom" style={{ paddingRight: '40px', paddingBottom: '20px'}}>
          <button onClick={() => this.newPost()} className="w3-button w3-circle w3-large w3-blue w3-right">+</button>
        </div>
      </div>
    )
  }

}

export default Posts;