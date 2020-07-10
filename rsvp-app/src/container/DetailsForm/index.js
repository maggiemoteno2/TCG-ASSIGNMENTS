import React, { Component } from "react";
import { connect } from "react-redux";
import {postApplicantInfo} from './../../redux/detailsForm/actions'
class DetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      email: " ",
    };
  }
  applicantInfo=(firstName,email)=>{
    this.props.postApplicantInfo(firstName,email);
  }
      handleChange = (event) => {
        const value = event.target.value;
        this.setState({  [event.target.name]: value, });
        console.log("name",this.state)
      };
  render() {
    const { firstname, email } = this.state;
    return (
      <div>
        <div className="form">
          <form>
            <div class="row">
              <div class="col-25">
                <label for="fname">First Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
        
                  value={firstname}
                  onChange={this.handleChange}
                  name="firstname"
                  placeholder="Your name.."
                required/>
              </div>
            </div>
            
            <div class="row">
              <div class="col-25">
                <label for="email">Email</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Your Email.." 
                  required/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="country">Food</label>
              </div>
              <div class="col-75">
                <select id="foodType" name="foodType">
                  <option value="none">None</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Beef">BEEF</option>
                  <option value="Pork">Pork</option>
                </select>
              </div>
            </div>

            <div class="row">
              <input onClick={()=>this.applicantInfo(firstname,email)}type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <a href="">
          <button>Back</button>
        </a>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    userDetails :state.detailsForm.userDetails
    
});


const mapDispatchToProps = dispatch => {
  return {
    postApplicantInfo: (firstName,email) => {
        dispatch(postApplicantInfo(firstName,email));
      },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsForm);
