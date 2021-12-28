import Navbar from "../components/screens/NavBar";
import styles from "../styles/Model.module.scss";
import Back from "../components/utils/Back";
import Image from "next/image";
import Footer from "../components/screens/Footer";
import Head from "next/head";

function Floor() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Back />
      <Head>
        <title>Floor Projection</title>
        <meta
          name="description"
          content=" Our team has developed a cool real-time integrated augmented reality
          sandpit to physically create topography models which are then scanned
          into a computer in real-time, and used as background for a variety of
          graphics effects and simulations."
        ></meta>
      </Head>
      <div className={styles.content}>
        <h1
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Interactive Wall & Floor Technology
        </h1>
        <p
          className={styles.text}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          Our Interactive floor and wall projection system is an exciting way to
          engage your customers and visitors Effortlessly turn any open space
          into an experience for your visitors, stop people in their traces as
          they play, walk and interact with games or marketing content. Our
          Interactive Floor Display system readily turns any open floor area
          into an ongoing experience of movement, action, fun and excitement,
          stopping people in their tracks as they play, walk by or interact with
          your marketing content. It can also be a fascinating and eye-catching
          addition to a variety of major events, such as weddings, birthday
          parties and advertising expos.
        </p>
      </div>
      <Image src="/image3.jpg" width={1920} height={724} alt="box" />
      <div className={styles.content}>
        <p
          className={styles.text}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="250"
        >
          <span style={{ fontWeight: "bold" }}> PREPARING FOR THE FUTURE</span>
          <br /> • Integrate advertising into amazing entertainment experience
          <br /> • Encourages teamwork and communication, Ideal for &apos;play
          and learn&apos;
          <br />• Resolution up to 4K <br />• Attractive eye catcher at live
          events, trade fairs, promotional campaigns and much more
          <br />• Play area in theme parks, water attractions, spas, science
          center and museums
          <br />• Kids entertainment for waiting areas, kid's corners and
          shopping malls
          <br />
          •Engage kids in a hygienic, safe and enjoyable way by converting any
          place into an unforgettable fun-filled interactive experience
        </p>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Customize Your Interactive Floor Projection:
        </h2>
        <p
          className={styles.text}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="251"
        >
          Carealities Team offers creative services to customize and optimize
          your campaign. Our team can help you to incorporate your ideas into
          your interactive floor exhibit, combining 2D and 3D graphics, sound
          and video in any way. Subjects and animations can be modified and
          customized according to customer choice and needs. We can also play a
          video with its audio or insert an accompanying audio to the effects.
          We also provide a variety of &apos;out of the box&apos; interactive
          scenarios that can be used &apos;as it is&apos; or easily adapted with
          your corporate logo.
        </p>
      </div>

      <Footer color="white" />
    </div>
  );
}

export default Floor;
