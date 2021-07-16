import React, { Component } from "react";
import { $posts } from '../../actions';
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import history from '../../history';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
      post: {}
		};
	}

  componentDidMount() {
    let { id } = this.props.match.params;
    this.getSinglePostDetails(id)
  }

  getSinglePostDetails(id){
    $posts.get(id).then(res => {
      this.setState({
        post: res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  editPost(id){
    history.push('/edit-post/'+id);
  }

  deleteDialog(id){
    Swal.fire({
      title: 'Are you sure ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `Yes, delete it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        $posts.delete(id).then(res => {
          Swal.fire('Deleted !', '', 'success')
          history.push('/');
        })
        .catch(function (error) {
          Swal.fire(error, '', 'error')
        })
      }
    })
  }

  render() {
    const { post } = this.state
    return(
      <div className="w3-card-4" style={{ paddingTop: '30px'}}>
        <header className="w3-container w3-light-grey w3-center">
          <h3>{post.title}</h3>
        </header>
        <div className="w3-container">
          <p>{post.body}</p>
        </div>
        <footer className="w3-container w3-dark-grey">
          <div className="w3-right">
            <span onClick={() => this.editPost(post.id)} className="w3-button">
              <i className="fa fa-pencil" />
            </span>
            <span onClick={() => this.deleteDialog(post.id)} className="w3-button">
              <i className="fa fa-trash" />
            </span>
          </div>
        </footer>
      </div>
    )
  }

}

export default  withRouter(Post);