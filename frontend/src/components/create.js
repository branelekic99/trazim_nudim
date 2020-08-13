import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateFnsUtils from "@date-io/date-fns";
import PlaceSearch from "./googleAutocompleteSearch";
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col } from "reactstrap";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function Create() {
  const { register, handleSubmit, control, errors } = useForm();
  const [startLocation, setStartLocation] = useState({ lat: null, lng: null });
  const [endLocation, setEndlocation] = useState({ lat: null, lng: null });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container fluid="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div>
              <PlaceSearch
                label={"Polazak"}
                onLocationChange={(location) => setStartLocation(location)}
                register={register({ required: true })}
              />
              {errors.Polazak && <p>This is required</p>}
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div>
              <PlaceSearch
                label={"Dolazak"}
                onLocationChange={(location) => setEndlocation(location)}
                register={register({ required: true })}
              />
              {errors.Dolazak && <p>This is required</p>}
            </div>
          </Col>
        </Row>
        <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Controller
                        as={KeyboardDatePicker}
                        control={control}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Datum polazka"
                        format="MM/dd/yyyy"
                        name="date_picker"
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        rules={{ required: true }}
                        />
                        {errors.date_picker && <p>This is required</p>}
                    </MuiPickersUtilsProvider>
                </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Controller
                        as={KeyboardTimePicker}
                        control={control}
                        margin="normal"
                        id="time-picker"
                        label="Vrijeme polazka"
                        name="time_picker"
                        KeyboardButtonProps={{
                            "aria-label": "change time",
                        }}
                        rules={{ required: true }}
                        />
                        {errors.time_picker && <p>This is required</p>}
                    </MuiPickersUtilsProvider>
                </div>
            </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div>
                <TextField
                    inputRef={register({ required: true })}
                    name="seatAveilable"
                    label="Broj mjesta"
                />
                {errors.seatAveilable && <p>This is required</p>}
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div>
                <TextField
                    inputRef={register({ required: true })}
                    name="seatAveilable"
                    label="Broj mjesta"
                />
                {errors.seatAveilable && <p>This is required</p>}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div>
            <FormControlLabel
                control={
                <Checkbox inputRef={register} name="cigarette" default={false} />
                }
                label="Cigarete"
            />
            </div>
            <div>
            <FormControlLabel
                control={
                <Checkbox inputRef={register} name="bags" default={false} />
                }
                label="Prtljag"
            />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={9} md={9} lg={9}></Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <div>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-outline-primary"
                />
            </div>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default Create;
