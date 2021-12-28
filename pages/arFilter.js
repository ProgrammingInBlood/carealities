import Navbar from "../components/screens/NavBar";
import styles from "../styles/Model.module.scss";
import Back from "../components/utils/Back";
import Image from "next/image";
import Footer from "../components/screens/Footer";
import Link from "next/link";
import Head from "next/head";

function Filter() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Back />
      <Head>
        <title>AR Filter</title>
        <meta
          name="description"
          content="Augmented reality (AR) filters superimposed virtual objects on
          real-life images."
        ></meta>
      </Head>
      <div className={styles.content}>
        <h1
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          AR Filters
        </h1>
        <p
          className={styles.text}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          Augmented reality (AR) filters superimposed virtual objects on
          real-life images. AR filters work together with your camera, adding a
          layer of imagery within the foreground or background of your image.
          The app gives users the prospect to visualize what their AR filters
          will seem like on a smartphone. The AR filters have the power to
          exponentially increase a brand&apos;s exposure in a short period of
          time. The AR filter can be made to work within different social media
          like Instagram, Facebook & Snapchat. The AR filters are more flexible
          for the customers to use because it cuts the barrier to download an
          extra app for the users as most of them will be using these social
          media and also it reduces the cost of designing.
        </p>
      </div>
      <Image src="/products/ar.jpg" width={1920} height={924} alt="box" />
      <div className={styles.content}>
        <h1
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Looking for AR Filter creator or want to Create one?
        </h1>
        <Link href="/#contact" passHref={true}>
          <h1
            className={styles.title}
            data-aos="zoom-in-up"
            data-aos-duration="500"
            data-aos-delay="400"
            style={{ color: "var(--main-color)", cursor: "pointer" }}
          >
            <span className={styles.gtext}>Contact Us</span>
          </h1>
        </Link>
      </div>

      <Footer color="white" />
    </div>
  );
}

export default Filter;
