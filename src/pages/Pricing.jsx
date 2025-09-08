// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import { useSearchParams } from "react-router-dom";

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <main className={styles.product}>
      <p>{lat}</p>
      <p>{lng}</p>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src='img-2.jpg'
          alt='overview of a large city with skyscrapers'
        />
      </section>
    </main>
  );
}
