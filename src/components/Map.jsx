import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}>
      <h1>MAP</h1>
      <h2>Latitude: {lat}</h2>
      <h2>Longitude: {lng}</h2>
    </div>
  );
}

export default Map;
