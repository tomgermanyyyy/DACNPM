import React from "react";

const Lightcheck = () => {
  return (
    <form>
      <div>
        <label htmlFor="light">Light_check:</label>
        <input type="number" id="light" name="light" min="1" max="100" />
      </div>
      <div>
        <label htmlFor="temperature">Temp_check:</label>
        <input type="number" id="temperature" name="temperature" min="1" max="100" />
      </div>
      <div>
        <label htmlFor="moisture">Moisture_check:</label>
        <input type="number" id="moisture" name="moisture" min="1" max="100" />
      </div>
    </form>
  );
};

export default Lightcheck;
