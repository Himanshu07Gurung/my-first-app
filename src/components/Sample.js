import React, { Component } from "react";

/*** ES6 class declaration */
class Sample extends Component {
  /*** Class Constructor */
  constructor(props) {
    /*** 
     * super() calls parent class contructor
     * props is passed to access the props passed from parent 
     */
	  super(props);
    /*** state is only applicable within the component */
    this.state = {
      text: ''
    };
  }

  /*** 
   * Component LifeCycles 
   */

  /*** componentDidMount() is called after the component output has been rendered to the DOM */
  componentDidMount() {}
  
  /*** componentWillUnmount() is called when component unmount */
  componentWillUnmount() {}

  /*** componentDidUpdate is called after any rendered HTML has finished loading. */
  componentDidUpdate(){}

  setData(){
    /*** setState is used to assign data */  
    this.setState({
      text: 'component'
    })
  }

  /*** 
   * Render is called whenever there is a change in any state 
   * It take care of the html tags
   */
  render() {
    return(
      <div style={{ paddingTop: '30px'}}>
        <h2 className="testing">Sample</h2>
        <span>Sample {this.state.text} describing basic concepts.</span>
      </div>
    )
  }
}

export default Sample;