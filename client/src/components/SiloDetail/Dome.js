import { FaUmbrellaBeach } from "react-icons/fa";
import classes from "../../styles/TurnOnOff.module.css";
import "../../styles/SwitchButton.css";
import { useState } from "react";
const Dome = (props) => {
  const [isChecked, setIsChecked] = useState(props.dome);
  const checkHandler = () => {
    setIsChecked(!isChecked);
    fetch("http://localhost:5000/api/plot/623fc8e17446956862565b44", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dome: !isChecked,
      }),
    });
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
