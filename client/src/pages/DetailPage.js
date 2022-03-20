import React from "react";
import classes from "../styles/DetailPage.module.css";
import { Sidebar, SquareChart,SiloDetail,RectangleChart} from "../components";
import { useParams } from "react-router-dom";
const HomePage = () => {
    const params = useParams()
    const {siloID}= params;
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.content}>
        <SquareChart name="Moisture" percent="76.5%" fill={false}/>
        <SquareChart name="Crop Level" percent="25.5%" fill={true}/>
        <SiloDetail siloID={siloID} />
        <RectangleChart name="Temperature"/>
      </div>
    </div>
  );
};

export default HomePage;
