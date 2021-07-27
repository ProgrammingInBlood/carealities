import Navbar from "../components/screens/NavBar";
import styles from "../styles/Model.module.scss";
import Back from "../components/utils/Back";
import Image from "next/image";
import Footer from "../components/screens/Footer";

function virtual() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Back />

      <div className={styles.content}>
        <h1
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          AR SANDPIT
        </h1>
        <p
          className={styles.text}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          Our team has developed a cool real-time integrated augmented reality
          sandpit to physically create topography models which are then scanned
          into a computer in real-time, and used as background for a variety of
          graphics effects and simulations. We have used the Kinect v2 for
          calculation of the depth and a projector to project the real-time
          simulation over the sand which is processed by the computer software.
        </p>
      </div>
      <Image
        src="/products/ar-sandpit.jpg"
        width={1920}
        height={724}
        alt="box"
      />
      <div className={styles.content}>
        <p
          className={styles.text}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="250"
        >
          The AR Sandpit helps the students to learn about geographic, geologic
          concepts such as how to read a topography map, water simulation, the
          meaning of contour lines, catchment areas watersheds, and more in an
          interactive way.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Our Sandpit is nothing like you have seen before.
          </span>
          <br /> • Highly responsive
          <br /> • The most accurate <br />• Resolution up to 4K <br />•
          Optional modules and games <br />• Water Simulation
        </p>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          HISTORY
        </h2>
        <p
          className={styles.text}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="250"
        >
          The interactive sandpit idea was initially brought to light by a team
          of scientists at The UC-Davis (https://arsandbox.ucdavis.edu/ ). They
          first developed a Linux-based software with limitations of their time
          and technology. We have developed a more stabilized, most responsive
          and accurate model.
        </p>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Contact us to build one for you or Experience it at your place
        </h2>
        <p
          className={styles.text}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="250"
        >
          Contact us to build an AR Sandpit for your organization, Schools,
          museums, etc. Our team also come in person to demonstrate the AR
          Sandpit and teach about the revolutionary Augmented Reality technology
          to the students.
        </p>
      </div>
      <Footer color="white" />
    </div>
  );
}

export default virtual;
