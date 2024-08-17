import { getAllPoints } from "../apis";
import { MapComponent } from "../components/MapComponent";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import ErrorComponent from "./../components/Error/index";

export const Points = () => {
  const {
    data: points,
    isLoading: isLoadingPoints,
    error: pointsError,
  } = useQuery({
    queryKey: ["points"],
    queryFn: () => getAllPoints(),
  });

  if (isLoadingPoints) return <Loader />;

  if (pointsError) return <ErrorComponent />;

  return (
    <div>
      <MapComponent points={points?.data || []} />
    </div>
  );
};
