import L from 'leaflet';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../styles/Home.css';
import { plotData } from './plotData';

const markerIcon = new L.Icon({
    iconUrl: '/farm-icon.svg',
    iconSize: [35, 35],
});

export default function PlotMap() {
    const [activePlot, setActivePlot] = useState(null);

    return (
        <MapContainer center={[45.4, -75.7]} zoom={9}>
            <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {plotData.features.map((plot) => (
                <Marker
                    key={plot.properties.PARK_ID}
                    position={[
                        plot.geometry.coordinates[1],
                        plot.geometry.coordinates[0],
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
                        activePlot.geometry.coordinates[1],
                        activePlot.geometry.coordinates[0],
                    ]}
                    onClose={() => {
                        setActivePlot(null);
                    }}
                >
                    <div>
                        <h4>{activePlot.properties.NAME}</h4>
                        <p>
                            <strong>Crop level: </strong>
                            {activePlot.properties.DESCRIPTIO}
                            <br />
                            <strong>Temperature : </strong>
                            {activePlot.properties.DESCRIPTIO}
                            <br />
                            <strong>Humidity: </strong>
                            {activePlot.properties.DESCRIPTIO}
                            <br />
                            <strong>Light: </strong>
                            {activePlot.properties.DESCRIPTIO}
                        </p>
                    </div>
                </Popup>
            )}
        </MapContainer>
    );
}
