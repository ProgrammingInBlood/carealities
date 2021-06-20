import styles from "../styles/Products.module.scss";
import Squarebox from "../utils/Squarebox";

function Products() {
  return (
    <div
      className={styles.container}
      id="product"
      style={{ paddingTop: "100px", marginTop: "-100px" }}
    >
      <h1 className={styles.title}>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Try&nbsp;
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Our&nbsp;
        </span>
        <span
          className={styles.gtext}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="500"
          style={{ color: "var(--main-color)" }}
        >
          Products&nbsp;
        </span>
      </h1>

      <div className={styles.content}>
        <Squarebox
          path="virtual"
          anim="fade-right"
          delay="600"
          url="/products/ar-sandpit.jpg"
          title="AR Sandpit"
        />
        <Squarebox
          path="filter"
          anim="fade-right"
          delay="400"
          url="/products/ar-filters.jpg"
          title="AR Filters"
        />
        <Squarebox
          path="model"
          anim="fade-right"
          delay="200"
          url="/products/3d-model.png"
          title="3D Modeling and Animations"
        />
      </div>
    </div>
  );
}

export default Products;
