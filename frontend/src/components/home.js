import React,{useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import {getToken,loadUser} from '../actions';
import {Redirect} from 'react-router-dom';


function Home(){

  const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
  const user = useSelector(state=>state.auth.user)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser());
  },[])
    if(!isAuthenticated){
      return <Redirect to="/login" />
    }
    return(
        <div>OVO JE HOME</div>
    )

};

export default Home;