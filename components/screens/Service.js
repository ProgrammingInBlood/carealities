import styles from "../styles/Service.module.scss";
import Box from "../utils/Box";
function Service() {
  return (
    <div
      className={styles.container}
      id="services"
      style={{ paddingTop: "100px", marginTop: "100px" }}
    >
      <h1 className={styles.title}>
        <span
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Types&nbsp;
        </span>
        <span
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          of&nbsp;
        </span>
        <span
          className={styles.gtext}
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          {" "}
          AR
        </span>
      </h1>

      <Box
        anim="fade-right"
        url={"/ar-types/markerbased.png"}
        title={"Marker Based AR"}
        text="A marker-based AR gets triggered when it recognizes a specific
    image pattern and superimposes the virtual object over it. It can be
    any 2D/3D models, videos, animations across numerous business   
    verticals."
      />
      <Box
        anim="fade-left"
        url={"/ar-types/markerless.jpg"}
        title={"Marker-Less AR"}
        text="The Marker-Less AR is also known as plane tracking AR solution
    which places 3D content over the real world’s environment. With no
    priosr knowledge about the surface, Marker-less AR solution with
    the help of a device allows users to scan the surface/plane in their
    environment and place the 3D objects over it."
      />
      <Box
        anim="fade-right"
        url={"/ar-types/location-based.jpeg"}
        title={"Location Based AR"}
        text="Location-Based AR is also referred to as position-based AR and GPS

    based Augmented technology. It basically relies on the mobile
    sensor-based technologies such as GPS, compass, and accelerometer.
    Location Based AR solution gives the user a Real-Time Navigation
    Augmented Reality experience. Overlaying digital data, users can
    have digitized animations, pictures or other data over the real,
    physical world. With the mixture of Augmented Reality geo location
    Based sensors, users can experience and board with powerful and
    fascinating navigation."
      />
      <Box
        anim="fade-left"
        url={"/ar-types/custom.png"}
        title={"Custom AR Solutions"}
        text="Want something which is not listed here and is unique? Don’t worry.
    Our Augmented Reality Developers at Carealities, can help you out in
    that too! Our team's experience makes us capable of delivering
    unique solutions for your needs. Our creative minds are focused and
    selflessly dedicated to work and convert your ideas and thoughts to
    reality. Contact us and let’s discuss your requirement and come up
    with a solution. We are happy to serve you with our dedication,
    uniqueness and creativity."
      />
    </div>
  );
}

export default Service;
