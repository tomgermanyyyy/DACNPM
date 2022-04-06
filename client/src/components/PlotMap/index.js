import L from 'leaflet';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const markerIcon = new L.Icon({
  iconUrl: 'plant.png',
  iconSize: [75, 75],
});

const HCM_COORDINATES = [10.76913, 106.65199];

function PlotMap({ plotData }) {
  const [activePlot, setActivePlot] = useState(null);

  return (
    <MapContainer center={HCM_COORDINATES} zoom={15}>
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {plotData.map((plot) => (
        <Marker
          key={plot._id}
          position={[
            plot.geometry.coordinates[0],
            plot.geometry.coordinates[1],
          ]}
          eventHandlers={{
            click: (e) => {
              setActivePlot(plot);
            },
          }}
          icon={markerIcon}
        />
      ))}

      {activePlot && (
        <Popup
          position={[
            activePlot.geometry.coordinates[0],
            activePlot.geometry.coordinates[1],
          ]}
          onClose={() => {
            setActivePlot(null);
          }}
        >
          <div>
            <h4>
              <Link to={`/detail-page/${activePlot._id}`}>
                Crop {activePlot.crop}
              </Link>
            </h4>
            <p>
              <strong>Temperature: </strong>
              {`${activePlot.temp_value} °C`}
              <br />
              <strong>Moisture: </strong>
              {`${activePlot.moisture_value} %`}
              <br />
              <strong>Light: </strong>
              {`${activePlot.light_value} lux`}
            </p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}

PlotMap.propType = {
  plotData: PropTypes.array.isRequired,
};

export default PlotMap;
