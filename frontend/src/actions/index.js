// ovde se pisu funkcije tj actions
import axios from 'axios'

export const testAction=()=>{
    return{
        type:"TEST_CASE"
    }
};

export const googleLogin=(data)=>{
   return function(dispatch){
        //ovde ide axios call na backend koji vraca key,
       dispatch({
           type:'LOGIN',
           payload:data
       })
   }
};