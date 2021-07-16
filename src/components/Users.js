import React, { Component } from "react";
import { $users } from '../actions/'

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersList: [],
      imgSrc: ''
		};
	}

  componentDidMount() {
    this.getUserLists()
    this.setState({
      imgSrc: 'https://www.pinpng.com/pngs/m/182-1823964_dicks-out-for-harambe-sample-image-avatar-png.png'
    })
  }

  getUserLists(){
    $users.usersList().then(res => {
      this.setState({
        usersList: res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div style={{ paddingTop: '30px'}}>
        <ul className="w3-ul w3-hoverable">
          {this.state.usersList.map((user) =>
            <li className="w3-bar" key={user.id}>
              <span
                className="w3-bar-item w3-button w3-white w3-right"
                style={{ paddingTop: '30px'}}
              >
                <i className="fa fa-arrow-right" />
              </span>
              <img
                src={this.state.imgSrc}
                className="w3-bar-item w3-circle w3-hide-small"
                style={{ width: '85px' }}
                alt="users profile"
              />
              <div className="w3-bar-item">
                <span className="w3-large">{user.username}</span><br />
                <span>{user.name}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }

}

export default Users;