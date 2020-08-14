import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import { fblogin, loadUser } from "../actions";

const componentClicked = () => {};
function FbloginComp() {
  const disptach = useDispatch();
  return (
    <FacebookLogin
      appId="3335188780040458"
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
        } catch {}
      }}
      redirectUri="/"
    />
  );
}

export default FbloginComp;
