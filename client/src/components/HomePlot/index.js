import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePlot.css';
import SChart from '../SquareChart/SChart';

function HomePlot({ plot }) {
  const {
    _id,
    crop,
    light_value,
    light_check,
    temp_value,
    temp_check,
    moisture_check,
    moisture_value,
  } = plot;

  return (
    <div className="home-plot">
      <h4 className="home-plot__name">
        <Link to={`/detail-page/${_id}`}>Crop {crop}</Link>
      </h4>
      <div className="home-plot__charts">
        <div className="home-plot__chart">
          <h5 className="home-plot__chart__title">Temperature</h5>
          <SChart name={'Temperature'} percent={temp_value / temp_check} />
          <h6 className="home-plot__chart__value">{`${temp_value} °C`}</h6>
        </div>
        <div className="home-plot__chart">
          <h5 className="home-plot__chart__title">Moisture</h5>
          <SChart name={'Moisture'} percent={moisture_value / moisture_check} />
          <h6 className="home-plot__chart__value">{`${moisture_value} °C`}</h6>
        </div>
        <div className="home-plot__chart">
          <h5 className="home-plot__chart__title">Light</h5>
          <SChart name={'Light'} percent={light_value / light_check} />
          <h6 className="home-plot__chart__value">{`${light_value} lux`}</h6>
        </div>
      </div>
    </div>
  );
}

HomePlot.propTypes = {
  plot: PropTypes.object.isRequired,
};

export default HomePlot;
