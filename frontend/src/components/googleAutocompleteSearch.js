import React ,{useState} from 'react';
import PlacesAutocomplete,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

function AutoSerach(props){

    const [address,setAddress] = useState("");
    const [coordinates,setCoordinates]=useState({lat:null,lng:null});

    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      props.onLocationChange(latLng);
    };
  
    return(
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
              <TextField inputRef={props.register} label={props.label} {...getInputProps()} fullWidth name={props.label} />
            <div>
              {/* {loading ? <div>...loading</div> : null} */}
            <List>
              {suggestions.map((suggestion,id) => {
                return (
                  <ListItem {...getSuggestionItemProps(suggestion)} key={id} button>
                    <ListItemText primary={suggestion.description} />
                  </ListItem>
                );
              })}
              </List>
            </div>
          </div>
        )} 
      </PlacesAutocomplete>
    )
};

export default AutoSerach;