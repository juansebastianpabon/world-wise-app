import styles from "./CountryItem.module.css";
import Twemoji from "react-twemoji";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Twemoji options={{ className: "twemoji" }}>{country.emoji} </Twemoji>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
