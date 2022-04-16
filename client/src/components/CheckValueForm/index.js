import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "../../styles/CheckValueForm.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideModal } from "../../actions/showhide";
const CheckValueForm = ({
  moisture_check,
  light_check,
  temp_check,
  siloID,
}) => {
  const [siloInfo, setSiloInfo] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const lightInputRef = useRef();
  const tempInputRef = useRef();
  const moistureInputRef = useRef();
  const onCloseHandler = () => {
    dispatch(hideModal());
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(lightInputRef.current.value);
    try {
      const res = await axios.put(`http://localhost:5000/api/plot/${siloID}`, {
        light_check: lightInputRef.current.value,
        temp_check: tempInputRef.current.value,
        moisture_check: moistureInputRef.current.value,
      });
      if (res.status === 200) {
        setSuccess(true);
        setError(null);
      }
    } catch (err) {
      setError("Something went wrong, please try again!!!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/plot/${siloID}`);
        console.log(res);
        if (res.status === 200) {
          setSiloInfo(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, []);
  if (!siloInfo) {
    return <p className={classes.loading}>Loading...</p>;
  }
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Change check value</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="temp">Temperature:</label>
        <input
          ref={tempInputRef}
          type="number"
          id="temp"
          className={classes.input}
          name="temp"
          min="0"
          max="1000"
          defaultValue={siloInfo.temp_check}
        />

        <label htmlFor="light">Light</label>
        <input
          ref={lightInputRef}
          type="number"
          id="lname"
          min="0"
          max="1000"
          className={classes.input}
          name="light"
          defaultValue={siloInfo.light_check}
        />
        <label htmlFor="moisture">Moisture</label>
        <input
          ref={moistureInputRef}
          type="number"
          id="moisture"
          min="0"
          max="1000"
          className={classes.input}
          name="moisture"
          defaultValue={siloInfo.moisture_check}
        />
        {error && <p className={classes.alert}>{error}</p>}
        {!success && (
          <input
            type="submit"
            value={error ? "Try Again" : "Submit"}
            className={classes.submit}
          />
        )}
        {success && (
          <Fragment>
            <p className={classes.success}>Change value successfully!</p>
            <button className={classes.close} onClick={onCloseHandler}>
              Close
            </button>
          </Fragment>
        )}
      </form>
    </div>
  );
};

export default CheckValueForm;
