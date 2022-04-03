import { GiWateringCan } from "react-icons/gi";
import classes from "../../styles/TurnOnOff.module.css";
import { useState } from "react";
import axios from 'axios'
const WaterPump = (props) => {
  const [isChecked, setIsChecked] = useState(props.pump);
  const checkHandler = () => {
    setIsChecked(!isChecked);
    fetch(`http://localhost:5000/api/plot/${props.siloID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pump: !isChecked,
      }),
    });
    axios.post("http://localhost:5000/api/history/save", {
        plotID: props.siloID,
        device: "pump",
        timestamp: new Date(),
        status: !isChecked ? "Open" : "Close",
        user: "admin",
        success: true
    })
  };
  return (
    <div className={classes.container}>
      <GiWateringCan size={30} color="blue" />
      <div className={classes.info}>
        <p>WaterPump</p>
        <div className={classes.onOffBar}>
          <p>Turn on/off water pump</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkHandler}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default WaterPump;
