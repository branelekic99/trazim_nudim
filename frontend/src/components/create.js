import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const handleSubmit=(e)=>{
    e.preventDefault();
    const obj ={
        
    }
}

function Create(){

    const [startLocation,setStartLocation] = useState("");
    const [endLocation,setEndlocation] = useState("");
    const [passengers,setPassengers] = useState("")
    const [smoking,setSmoking] = useState(false);
    const [baggage,setBaggage] = useState(false);
    const [selectedDate,setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [selectedTime,setSelectedTime] =useState(new Date('2014-08-18T21:11:54'));

    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <div>  
                    <TextField label="Polazak" value={startLocation} onChange={e=>setStartLocation(e.target.value)}/>
                </div>
                <div>
                    <TextField label="Dolazak" value={endLocation} onChange={e=>setEndlocation(e.target.value)}/>
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Datum polazka"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={date=>setSelectedDate(date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                }}
                />
                <br></br>
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Vrijeme polazka"
                    value={selectedTime}
                    onChange={time=>setSelectedTime(time)}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
            />
            </MuiPickersUtilsProvider>
                </div>
                <div>
                    <TextField label="Broj mjesta" value={passengers} onChange={e=>setPassengers(e.target.value)}/>
                </div>
                <div>
                <FormControlLabel 
                    control={ <Checkbox checked={smoking} onChange={()=>setSmoking(!smoking)}
                    />}
                    label="Cigarete"/>
                </div>
                <div>
                    <FormControlLabel 
                        control={ <Checkbox checked={baggage} onChange={()=>setBaggage(!baggage)}
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