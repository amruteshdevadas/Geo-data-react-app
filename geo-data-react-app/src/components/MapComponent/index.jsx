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
      <MapContainer center={[51.5, -0.1]} zoom={5} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {points?.length > 0 &&
          points.map((point) => (
            <Marker
              key={point._id} // Use _id as MongoDB typically uses this field
              position={[
                point.location.coordinates[1],
                point.location.coordinates[0],
              ]} // Assuming coordinates are stored as [longitude, latitude]
              eventHandlers={{
                click: () => handleFeatureClick(point),
              }}
            >
              <Popup>{point.name}</Popup>
            </Marker>
          ))}

        {polygons?.length > 0 &&
          polygons.map((polygon) => {
            console.log(polygon.area.coordinates[0]);
            return (
              <Polygon
                key={polygon._id} // Use _id as MongoDB typically uses this field
                positions={polygon.area.coordinates[0]} // Access the coordinates from the 'area' field
                eventHandlers={{
                  click: () => handleFeatureClick(polygon),
                }}
                pathOptions={{
                  color: "red",
                  weight: 5,
                  opacity: 0.7,
                  fillColor: "lightblue",
                  fillOpacity: 0.5,
                }}
              >
                <Popup>{polygon.name}</Popup>
              </Polygon>
            );
          })}

        {multipolygons?.length > 0 &&
          multipolygons.map((multipolygon) => (
            <Polygon
              key={multipolygon._id} // Use _id as MongoDB typically uses this field
              positions={multipolygon.area.coordinates[0]} // Access the coordinates from the 'area' field
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
