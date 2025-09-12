import styles from "./CityItem.module.css";
import Twemoji from "react-twemoji";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext.jsx";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleDelete(e, id) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <Twemoji options={{ className: "twemoji" }}>{emoji} </Twemoji>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button
          className={styles.deleteBtn}
          onClick={(e) => handleDelete(e, id)}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
