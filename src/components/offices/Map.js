import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../App.css";

const Map = ({ selectSede }) => {
  const { name, latitud, longitud, address, date } = selectSede;

  return (
    latitud && (
      <MapContainer
        center={[latitud, longitud]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitud, longitud]}>
          <Popup>
            {name}
            <br /> {address}.
            <br /> Horario : {date}.
          </Popup>
        </Marker>
      </MapContainer>
    )
  );
};

export default Map;
