import React from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Location from "./Location";
import UnionJSON from "./assets/small_bangladesh_geojson_adm4_5160_unions_thanas.json";
import "./App.css";

function App() {
  return (
    <div>
      <h1 align="center">Hello World!</h1>
      <MapContainer
        center={[23.822283, 90.392923]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={UnionJSON} />
        <Location />
        {/* <Marker position={[23.822283, 90.392923]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default App;
