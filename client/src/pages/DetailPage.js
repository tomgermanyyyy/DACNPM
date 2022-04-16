import React, { useEffect, useState } from "react";
import classes from "../styles/DetailPage.module.css";
import WaterPump from "../components/SiloDetail/WaterPump";
import { Sidebar, SquareChart, SiloDetail } from "../components";
import { useParams } from "react-router-dom";
import Dome from "../components/SiloDetail/Dome";
const HomePage = () => {
  const [siloInfo, setSiloInfo] = useState();
  const [error, setError] = useState();
  const params = useParams();
  const { siloID } = params;
  useEffect(() => {
    fetch(`http://localhost:5000/api/plot/${siloID}`)
      .then((res) => {
        if(res.status===500){
          setError("Silo Not Found");
        }
        return res.json();
      })
      .then((data) => {
        setSiloInfo(data);
        
      })
      .catch((err) => {
        console.log("something went wrong");
        setError(err);
      });
  }, []);
  if (!siloInfo) {
    return <h1 className={classes.textcenter}>Loading...</h1>;
  }
  if(siloInfo){
    console.log(siloInfo.moisture_check);
  }
  if (error) {
    return <h1 className={classes.textcenter}>{error}</h1>;
  }
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.content}>
        <SquareChart
          name="Moisture"
          percent={siloInfo.moisture_value / siloInfo.moisture_check}
          value={`${siloInfo.moisture_value}%`}
        />
        <SquareChart
          name="Light"
          percent={siloInfo.light_value / siloInfo.light_check}
          value={`${siloInfo.light_value} lux`}
        />
        <SquareChart
          name="Temperature"
          percent={siloInfo.temp_value / siloInfo.temp_check}
          value={`${siloInfo.temp_value}°C`}
        />
        <SiloDetail
          siloName={`Silo ${siloInfo.crop}`}
          siloID= {siloID}
          location={siloInfo.location}
          dome={siloInfo.dome}
          pump={siloInfo.pump}
          moisture={siloInfo.moisture_value}
          temperature={siloInfo.temp_value}
          light={siloInfo.light_value}
          light_check={siloInfo.light_check}
          moisture_check={siloInfo.moisture_check}
          temp_check={siloInfo.temp_check}
        ></SiloDetail>
        <div className={classes.modifyButton}>
          <WaterPump siloID={siloID} pump={siloInfo.pump}></WaterPump>
          <Dome siloID={siloID} dome={siloInfo.dome}></Dome>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
