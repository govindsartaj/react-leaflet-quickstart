import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../style/Map.css";
import "leaflet/dist/leaflet.css";
import SearchContainer from "./SearchContainer";

function Map() {
  const position = [37.7492, -97.7201];
  return (
    <div className="map">
      {/* <SearchContainer/> */}
      <MapContainer center={position} zoom={5} zoomControl={false} minZoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;
