import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {googleLogin} from '../actions'



function Login(){

    const disptach = useDispatch();
    return(
       <div>
           <button onClick={()=>disptach(googleLogin("neki objekat"))}>test</button>
       </div>
        
    )
};

export default Login;