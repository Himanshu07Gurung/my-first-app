import React, { Component } from "react";
import { $posts } from '../../actions';
import { withRouter } from "react-router";
import history from '../../history';
import Swal from "sweetalert2";
import notify from "../../shared/notify";
import "react-toastify/dist/ReactToastify.css";

class New extends Component {
  constructor(props) {
	super(props);
    this.state = {
      title: '',
      body: '',
      userId: 1,
      postId: null
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    if(id !== undefined)
      this.getSinglePostDetails(id)
  }

  getSinglePostDetails(id){
    $posts.get(id).then(res => {
      this.setState({
        title: res.data.title,
        body: res.data.body,
        postId: id
      })
    })
    .catch(function (error) {
      notify("error", error);
    })
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  }

  handleBodyChange = e => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    let formData = {
      title: this.state.title,
      body:  this.state.body,
    } 
    if(this.state.postId !== null){
      $posts.update(this.state.postId, formData).then(res => {
        Swal.fire('Post Updated Successfully !', '', 'success')
        history.push('/');
      })
      .catch(function (error) {
        notify("error", error);
      })
    }
    else{
      $posts.create(formData).then(res => {
        Swal.fire('Post Created Successfully !', '', 'success')
        history.push('/');
      })
      .catch(function (error) {
        notify("error", error);
      })
    }
  }

  render() {
    return(
      <div style={{ paddingTop: '20px'}}>
        <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin" onSubmit={e => this.handleSubmit(e)}>
          <h2 className="w3-center">Create Post</h2>
          <div className="w3-row w3-section">
            <div className="w3-rest">
              <input
                className="w3-input w3-border"
                name="title"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={e => this.handleTitleChange(e)}
              />
            </div>
          </div>
          <div className="w3-row w3-section">
            <div className="w3-rest">
              <textarea
                className="w3-input w3-border"
                name="body"
                type="text-area"
                placeholder="Body"
                value={this.state.body}
                onChange={e => this.handleBodyChange(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding"
            disabled={this.state.title === ''}
          >
            {this.state.postId !== null ? 'Update' : 'Create'}
          </button>
        </form>
      </div>
    )
  }
}

export default  withRouter(New);