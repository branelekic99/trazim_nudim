/*global google*/
import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import PlaceSearch from './googleAutocompleteSearch';
import {useForm,Controller} from 'react-hook-form';
import Map from './googleMap';
import { withScriptjs } from "react-google-maps";
import {loadUser} from '../actions';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { Redirect } from 'react-router';
import { DateTimePicker, Picklist, PicklistOption } from 'react-rainbow-components';


function Create(){

    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
    const {register,handleSubmit,control,errors} = useForm();
    const [startLocation,setStartLocation] = useState({lat:null,lng:null});
    const [endLocation,setEndlocation] = useState({lat:null,lng:null});
    const driverProfile = useSelector(state=>state.auth.user);
    const [initvlaue,setinitvalue] = useState(new Date('2020-10-25 10:44'))
 
    const MapLoader = withScriptjs(Map);

    useEffect(()=>{
        if(!isAuthenticated){dispatch(loadUser());}
      },[])
      
    if(!isAuthenticated){
        return <Redirect to="/login" />
    }

    const onSubmit = data=>{
        const startloc = data.Polazak.split(",");
        const endloc = data.Dolazak.split(",");
        const route_name = startloc[0]+" - "+endloc[0];
        const obj = {
            route_name:route_name,
            driver_profile:driverProfile.id,
            startingLocation:[startLocation.lat,startLocation.lng],
            endLocation:[endLocation.lat,endLocation.lng],
            cigarette_allowed:data.cigarette,
            luggage_allowed:data.bags,
            empty_spots:data.seatAveilable
        }
        console.log("OVO JE OBJ",obj);
        console.log("ovo je data",data);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    <PlaceSearch label={"Polazak"} onLocationChange={(location)=>setStartLocation(location)} register={register({required:true})}/>
                    {errors.Polazak && <p>This is required</p>}
                </div>
                <div> 
                    <PlaceSearch label={"Dolazak"} onLocationChange={(location)=>setEndlocation(location)} register={register({required:true})}/>
                    {errors.Dolazak && <p>This is required</p>}
                </div>
                <div>
                <Controller as={DateTimePicker} control={control} margin="normal" 
                    formatStyle="small"
                    name='date-time'
                    id="datetimepicker-1"
                    label="Datum i vrijeme polaska"
                    value={initvlaue}
                    onChange={value => {
                    // console.log(value.toISOString())
                    setinitvalue(value)}
                 }
                    hour24
                
                />
                </div>
                <div>
                    <TextField inputRef={register({required:true})} name='seatAveilable' label="Broj mjesta" />
                    {errors.seatAveilable && <p>This is required</p>}
                </div>
                <div>
                <FormControlLabel 
                    control={ <Checkbox inputRef={register} name='cigarette' default={false} 
                    />}
                    label="Cigarete"/>
                </div>
                <div>
                    <FormControlLabel 
                        control={ <Checkbox inputRef={register} name='bags' default={false} 
                        />}
                    label="Prtljag"/>
                </div>
                <div>
                    <input type="submit" value="Submit" className="btn btn-outline-primary"/>
                </div>
            </form>
            {/* <MapLoader
            origin={startLocation}
            destination={endLocation}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzVvWVxhqlH_cf1bv4SNK_udydIje5wfA"
      loadingElement={<div style={{ height: `100%` }} />}
    /> */}
        </div>
    )
};

export default Create;