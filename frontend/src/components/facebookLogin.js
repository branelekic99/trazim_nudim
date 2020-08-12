import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import {fblogin,loadUser} from '../actions'
import {Redirect} from 'react-router-dom';

const componentClicked = ()=>{

}
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

export default FbloginComp;