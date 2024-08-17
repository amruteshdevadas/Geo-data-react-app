import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import { InfoCard } from "../Card/Card";
import "./index.css";

function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

export const MapComponent = (props) => {
  const { points, polygons, multipolygons } = props;
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    console.log(feature);
    setSelectedFeature(feature);
  };

  return (
    <>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        // style={{ height: "100vh", width: "100%" }}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {points?.length > 0 &&
          points.map((point) => (
            <Marker
              key={point.id}
              position={[point.lat, point.lng]}
              eventHandlers={{
                click: () => handleFeatureClick(point),
              }}
            >
              <Popup>{point.name}</Popup>
            </Marker>
          ))}
        {polygons?.length > 0 &&
          polygons.map((polygon) => (
            <Polygon
              key={polygon.id}
              positions={polygon.coordinates}
              eventHandlers={{
                click: () => handleFeatureClick(polygon),
              }}
            >
              <Popup>{polygon.name}</Popup>
            </Polygon>
          ))}
        {multipolygons?.length > 0 &&
          multipolygons.map((multipolygon) => (
            <Polygon
              key={multipolygon.id}
              positions={multipolygon.coordinates}
              eventHandlers={{
                click: () => handleFeatureClick(multipolygon),
              }}
            >
              <Popup>{multipolygon.name}</Popup>
            </Polygon>
          ))}
      </MapContainer>
      {selectedFeature && (
        <InfoCard
          id={selectedFeature?.id}
          name={selectedFeature.name}
          lat={selectedFeature.lat}
          lng={selectedFeature.lng}
        />
      )}
    </>
  );
};
