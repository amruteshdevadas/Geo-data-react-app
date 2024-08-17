export const InfoCard = (props) => {
  const { name, id, lat, lng } = props;
  return (
    <div className="info-card">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      {lat && (
        <p>
          Coordinates: {lat}, {lng}
        </p>
      )}
    </div>
  );
};
