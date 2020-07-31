import React ,{useState} from 'react';
import PlacesAutocomplete,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';

function AutoSerach(){

    const [address,setAddress] = useState("");
    
    return(
       <PlacesAutocomplete 
        value = {address}
        onChange = {setAddress}
        // onSelect = {handleSelect}
       />
    )
};

export default AutoSerach;