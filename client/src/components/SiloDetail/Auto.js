import { FaUmbrellaBeach } from "react-icons/fa";
import classes from "../../styles/TurnOnOff.module.css";
import "../../styles/SwitchButton.css";
import { useState } from "react";
import axios from 'axios'
const Auto = (props) => {
  const [isChecked, setIsChecked] = useState(props.auto);
  const checkHandler = () => {
    setIsChecked(!isChecked);
    fetch(`http://localhost:5000/api/plot/${props.siloID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        auto: !isChecked,
      }),
    });
  };
  return (
    <div className={classes.container}>
      <FaUmbrellaBeach size={30} color="Orange" />
      <div className={classes.info}>
        <p>Auto Control</p>
        <div className={classes.onOffBar}>
          <p>Turn On/Off</p>
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

export default Auto;
