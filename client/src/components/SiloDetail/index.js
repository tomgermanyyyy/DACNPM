import classes from "../../styles/SiloDetail.module.css";
import InfoBar from "./InfoBar";
import Aeration from "./Aeration";
import WaterPump from "./WaterPump";
import LightBulb from "./LightBulb";
const SiloDetail = (props) => {
  const idOfSilo = props.siloID;
  return (
    <div className={classes.container}>
      <h1>{`${idOfSilo} :Info`}</h1>
      <InfoBar></InfoBar>
      <div className={classes.onOffBars}>
        <Aeration></Aeration>
        <WaterPump></WaterPump>
        <LightBulb></LightBulb>
      </div>
    </div>
  );
};

export default SiloDetail;
