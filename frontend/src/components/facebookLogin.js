<<<<<<< HEAD
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import { fblogin, loadUser } from "../actions";
=======
import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import {fblogin,loadUser} from '../actions'
import {Redirect} from 'react-router-dom';

const componentClicked = ()=>{
>>>>>>> 289c15d6100b836dc29756729f6c1c60fa42a6ea

const componentClicked = () => {};
function FbloginComp() {
  const disptach = useDispatch();
  return (
    <FacebookLogin
      appId="3335188780040458"
      autoLoad={true}
      fields="name,email,picture"
      icon="fa fa-facebook fa-fw"
      cssClass="fb btn"
      onClick={componentClicked}
      callback={(response) => {
        try {
          const obj = {
            accessToken: response.accessToken,
            profilePic: response.picture.data.url,
          };
          disptach(fblogin(obj));
          disptach(loadUser());
        } catch {}
      }}
      redirectUri="/"
    />
  );
}
<<<<<<< HEAD
=======
function FbloginComp(){
    const dispatch = useDispatch();

    return(
        <FacebookLogin
                appId="3335188780040458"
                fields="name,email,picture"
                onClick={componentClicked}
                callback={(response)=>{
                    try{
                        const obj = {
                            'accessToken':response.accessToken,
                            'profilePic':response.picture.data.url
                        };
                        dispatch(fblogin(obj));
                }catch{
                    
                }
                }}
                redirectUri="/"
                />
    )
};
>>>>>>> 289c15d6100b836dc29756729f6c1c60fa42a6ea

export default FbloginComp;
