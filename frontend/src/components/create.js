import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import PlaceSearch from './googleAutocompleteSearch';
import {useForm,Controller} from 'react-hook-form';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

function Create(){

    const {register,handleSubmit,control,errors} = useForm();
    const [startLocation,setStartLocation] = useState({lat:null,lng:null});
    const [endLocation,setEndlocation] = useState({lat:null,lng:null});

    const onSubmit = data=>{
        console.log(data);
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Controller as={KeyboardDatePicker} control={control} margin="normal"
                            id="date-picker-dialog"
                            label="Datum polazka"
                            format="MM/dd/yyyy"
                            name='date_picker'
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            rules={{ required: true }}
                        />
                         {errors.date_picker && <p>This is required</p>}
                        <br></br>
                        <Controller 
                            as={KeyboardTimePicker} control={control}  margin="normal"
                            id="time-picker"
                            label="Vrijeme polazka"
                            name='time_picker'
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            rules={{ required: true }}
                        />
                        {errors.time_picker && <p>This is required</p>}
                    </MuiPickersUtilsProvider>
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
        </div>
    )
};

export default Create;