import { useQuery } from "@tanstack/react-query";
import { getAllPolygons } from "../apis";
import ErrorComponent from "../components/Error";
import Loader from "../components/Loader";
import { MapComponent } from "../components/MapComponent";

export const Polygons = () => {
  const {
    data: polygons,
    isLoading: isLoadingPolygons,
    error: polygonsError,
  } = useQuery({
    queryKey: ["polygons"],
    queryFn: () => getAllPolygons(),
  });

  if (isLoadingPolygons) return <Loader />;

  if (polygonsError) return <ErrorComponent />;

  return <MapComponent polygons={polygons?.data || []} />;
};
