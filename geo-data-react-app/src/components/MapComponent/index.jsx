import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";

function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

export const MapComponent = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[51.505, -0.09]}
        eventHandlers={{
          click: (e) => {
            console.log("marker Clicked", e);
          },
        }}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
