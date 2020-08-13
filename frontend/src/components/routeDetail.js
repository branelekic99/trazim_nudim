import React from 'react';
import Map from './googleMap';
import { withScriptjs } from "react-google-maps";

function routeDetial(props){

    const routeId=props.match.params.id;

    const MapLoader = withScriptjs(Map);
    return(
        <div>
            <div>
                {/* <MapLoader
                    origin={startLocation}
                    destination={endLocation}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzVvWVxhqlH_cf1bv4SNK_udydIje5wfA"
                    loadingElement={<div style={{ height: `100%` }} />}
                /> */}
            </div>
        </div>
    )

};

export default routeDetial;