import React,{useEffect}from "react";
import {getListOfRouts} from "../actions";
import {useSelector,useDispatch} from 'react-redux';

function Offer() {
  const disptach = useDispatch();
  const routes = useSelector(state=>state.route.routes);
  useEffect(()=>{
    disptach(getListOfRouts());
  },[]);
  

  return (
    <>
      <div className="container mt-4">
        <div className="row m-0 m-auto">
          <div className="col-12 col-md-7 col-lg-7 mr-2 mb-2 sv-test">
            seacrh
          </div>
          <div className="col-12 col-md-2 col-lg-2 mr-2 mb-2 sv-test">1</div>
          <div className="col-12 col-md-2 col-lg-2 mb-2 sv-test">1</div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="row m-0 m-auto">
          <div className="col-12 col-md-11 col-lg-11 m-0 m-auto sv-test"></div>
        </div>
      </div>
    </>
  );
};

export default Offer;
