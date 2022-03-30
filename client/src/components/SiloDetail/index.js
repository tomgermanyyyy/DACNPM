import classes from "../../styles/SiloDetail.module.css";
import InfoBar from "./InfoBar";
const SiloDetail = (props) => {
  const idOfSilo = props.siloID;
  return (
    <div className={classes.container}>
      <h1>{`${idOfSilo}`}</h1>
      <InfoBar
        dome={props.dome}
        pump={props.pump}
        moisture={props.moisture}
        temperature={props.temperature}
        light={props.light}
      ></InfoBar>
      <div className={classes.address}>
        <span>Location:</span>
        <span>{props.location}</span>
      </div>
    </div>
  );
};

export default SiloDetail;
