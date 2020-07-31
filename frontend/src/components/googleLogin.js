import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import GoogleLogin from 'react-google-login';
import {googleLogin} from '../actions'

const responseGoogle =(response)=>{console.log(response)};

function GoogleLoginComp(){
    const dispatch = useDispatch()
    return(
        <GoogleLogin
                clientId="80754051106-suhqenls9nuo1bo09guj2cpragffi9e2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(response)=>{
                    const obj ={
                        'accessToken':response.accessToken,
                        'profilePic':response.profileObj.imageUrl
                    };
                    dispatch(googleLogin(obj));
                }}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
    )
};

export default GoogleLoginComp;