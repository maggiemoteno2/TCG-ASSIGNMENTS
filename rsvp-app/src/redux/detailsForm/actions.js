import {ADD_DETAILS} from './../actionTypes'
import axios from "axios"

export const postApplicantInfo=(firstName,email) =>{
    return async dispatch => {
        try {
    
          const { data } = await axios.post("http://localhost:3005/applicantInformation", {
            firstName,
              email
            });
   
          dispatch({
            type: ADD_DETAILS,
            payload:{ ...data} 
          });
        } catch (e) {
          console.log(e);
        }
      };
}