import { FaUmbrellaBeach } from "react-icons/fa";
import classes from "../../styles/TurnOnOff.module.css";
import "../../styles/SwitchButton.css";
import { useState } from "react";
import axios from 'axios'
const Dome = (props) => {
  const [isChecked, setIsChecked] = useState(props.dome === 3);
  const checkHandler = () => {
    setIsChecked(!isChecked);
    fetch(`http://localhost:5000/api/plot/${props.siloID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dome: !isChecked ? 3 : 2,
      }),
    });
    axios.post("http://localhost:5000/api/history/save", {
        plotID: props.siloID,
        device: "dome",
        status: !isChecked ? "Open" : "Close",
        user: "admin",
        success: true
    })
    axios.post("http://localhost:5000/api/adafruit/update", {
      plotId: props.siloID,
      name: "dome",
      value: !isChecked ? 3 : 2
    })
  };
  return (
    <div className={classes.container}>
      <FaUmbrellaBeach size={30} color="Orange" />
      <div className={classes.info}>
        <p>Dome</p>
        <div className={classes.onOffBar}>
          <p>Close/open the dome</p>
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

export default Dome;
