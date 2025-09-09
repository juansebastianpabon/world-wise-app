import { useCities } from "../context/CitiesContext.jsx";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem.jsx";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";

function CountryList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  if (isLoading) return <Spinner />;

  if (!countries.length)
    return (
      <Message message='Add your first country by clicking on a country on the map.' />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem
          country={country}
          key={country.country}
        />
      ))}
    </ul>
  );
}

export default CountryList;
