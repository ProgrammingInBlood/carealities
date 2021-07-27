import styles from "../styles/About.module.scss";
import Image from "next/image";
import Services from "../utils/Services";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useRouter } from "next/router";
function About() {
  const Router = useRouter();

  function Industries() {
    Router.push("/industries");
  }
  return (
    <div
      className={styles.container}
      style={{ paddingTop: "100px", marginTop: "-100px" }}
      id="about"
    >
      <h1 className={styles.title}>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          “We&nbsp;
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          {" "}
          craft&nbsp;
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          {" "}
          Digital&nbsp;
        </span>
        <span
          className={styles.gtext}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          Experience &nbsp;
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          {" "}
          beyond&nbsp;
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          {" "}
          your&nbsp;
        </span>
        <span
          className={styles.gtext}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="700"
        >
          Expectation.”
        </span>
      </h1>

      <div className={styles.content}>
        <div
          className={styles.banner}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <Image src="/person.png" height={400} width={350} alt="person" />
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
          <h2 className={styles.subtitle}>
            Why <span className={styles.gtext}>Augmented Reality </span>{" "}
            Development Is so popular these days?
          </h2>
          <p className={styles.text}>
            At present augmented reality is one among the leading technology
            that completely enabled any business to stay a robust foothold among
            the competitors. If you&apos;re the one, who aim to develop your
            service or products through Augmented Reality app then you must
            definitely consider us. Currently, most of the businesses offer best
            AR products and applications that are unique at an equivalent time
            innovative. Overall, AR plays an important role in many industries
            and it are often a game changer for any business. Since AR
            completely transformed the prevailing tedious methods.
          </p>
        </div>
      </div>
      <div className={styles.content2}>
        <div>
          <h2
            className={styles.subtitle}
            style={{ textAlign: "center" }}
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            INDUSTRIE’S WE SERVE
          </h2>
          <div className={styles.service}>
            <Services url="/services/realEstate.png" title="Real Estate" />
            <Services url="/services/education.png" title="Education" />
            <Services url="/services/article.png" title="Print Media" />
            <Services url="/services/resturant.png" title="Restaurants" />
            <Services url="/services/transport.png" title="Automobile" />
            <Services url="/services/apple.png" title="Brands" />
            <Services url="/services/events.png" title="Events" />
            <Services url="/services/hospital.png" title="Health Care" />
          </div>
        </div>
      </div>
      <div className={styles.content} style={{ justifyContent: "center" }}>
        <button
          className={styles.button}
          onClick={Industries}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
          style={{ display: "flex", alignItems: "center" }}
        >
          Know More <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default About;
