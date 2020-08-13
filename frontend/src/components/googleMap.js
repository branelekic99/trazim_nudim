import React,{Component,useState,useEffect} from 'react';
import { withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer, } from "react-google-maps";

function Map(props){
  const [direction,setDirection] = useState(null);

  useEffect(()=>{
    const directionsService = new window.google.maps.DirectionsService();

    const origin = { lat: props.origin.lat, lng:props.origin.lng };
    const destination = { lat:props.destination.lat, lng: props.destination.lng };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          if(result){
            setDirection(result);
          }
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  },[]);

  const GoogleMapExample = withGoogleMap(props => {
    return (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    >
      <DirectionsRenderer
        directions={direction?direction:""}
      />
    </GoogleMap>
  )});

  return(
    <div>
    <GoogleMapExample
      containerElement={<div style={{ height: `500px`, width: "100%" }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
  );
}
export default Map;


