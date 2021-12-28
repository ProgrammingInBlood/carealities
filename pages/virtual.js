import Navbar from "../components/screens/NavBar";
import styles from "../styles/Industries.module.scss";
import Back from "../components/utils/Back";
import Image from "next/image";
import Footer from "../components/screens/Footer";
import Head from "next/head";

function Industries() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Back />
      <Head>
        <title>AR Sandpit</title>
        <meta
          name="description"
          content="The ever-growing continuous demand for AR mobile applications has
          developed the scope of businesses to develop a strong foundation in
          the industry."
        ></meta>
      </Head>

      <div className={styles.content}>
        <h1
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Our various Services & Products
        </h1>
        <p
          className={styles.text}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          The ever-growing continuous demand for AR mobile applications has
          developed the scope of businesses to develop a strong foundation in
          the industry. Over the past years, the impact of AR potential is
          redefining the business decision-making process. We at Carealities
          provide the experience to develop tailored AR solution for our clients
          across various industries. We help our client to unravel several
          aspects associated with the companies with AR app development.
        </p>
      </div>
      <Image
        src="/services/our-services.png"
        width={1920}
        height={724}
        alt="box"
      />
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Real Estate{" "}
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            Often, it is tough to showcase the potential of your offerings and
            convince the clients to shop for products, especially when it&apos;s
            an outsized complex, machinery, or larger property. To address such
            challenges, we create Plane Tracking AR app which might give your
            customers the original feel, reality of the ground, property, place
            or design taking them to the virtual walkthrough of places using 3D
            images and graphics. The AR technology in Real estate helps a lot by
            allowing the customers to view the property in a new dimension
            without traveling to the property location.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image
              className={styles.img}
              src="/services/real.jpg"
              width={320}
              height={240}
              alt="box"
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Print Media
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            Newspapers, Books, Magazines and other Print Media and Publication
            products can be redefined using Augmented Reality efficiently. It’ll
            be a revolutionizing act for the media sector and education field,
            making the reading fun through visual elements. Not just youth and
            adults, AR apps can make learning and reading fun for the little
            kids and alter the way of learning.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Image
              className={styles.img}
              src="/services/print.jpg"
              width={320}
              height={240}
              alt="box"
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          AR Commerce
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            Using our Augmented Reality solutions brands can create innovative
            marketing campaigns and techniques to engage the customers. Using
            our AR solutions, E- commerce brands can offer their customers the
            real-time immersive and interactive virtual trial experience of
            their products. Implementing augmented reality to AR Commerce allows
            the customers to view different variations of products in real life
            even without touching them by using highly accurate 3D models of
            products. The opportunities that AR Commerce offer is innumerable.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>
              The various Benefits of implementing the AR Commerce solution for
              your brands.
            </span>
            <br />
            • Increases the customer engagement and loyalty
            <br />
            • Influence customer to make the right decisions
            <br />• Accelerating sales
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image
              className={styles.img}
              src="/services/AR-in-eCommerce.png"
              width={320}
              height={240}
              alt="box"
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          AR Food Menu
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            The Augmented Reality Food menu will be a key marketing tool for the
            restaurant business. The AR Food menu provides a rich and
            interactive dining experience to your customers, they just need to
            point their smartphone&apos;s camera over any item in the menu
            immediately realistic 3D model of the food is deployed. It engages
            the customers and helps the users to see a wide variety of your food
            menu how it looks in real. The AR Food menu is an effective way to
            attract more numbers of customers and it can also be designed with a
            wide range of other features to enhance the customer experience.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Image
              className={styles.img}
              alt="box"
              src="/services/food.jpg"
              width={320}
              height={240}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Virtual Product Try-On
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            The virtual Try-On allows the users to try a product virtually
            through their mobile app camera, which offers a better facial
            recognition, machine learning and 3D modelling the images and
            videos. By using various renowned SDKs, we can offer Virtual Try-On
            on various products like shoes, watch, footwear, Beauty and Makeup,
            furniture, Apparels, etc. The user can virtually try on the products
            and decide to buy later with a simple motto &quot;Try before you
            Buy!&quot;.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image
              className={styles.img}
              alt="box"
              src="/products/ar-try-on.jpg"
              width={320}
              height={240}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          AR Find my way
        </h2>
        <div
          className={styles.flexbox}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <p className={styles.text}>
            AR Find my way solution offers an improved navigating experience to
            users in their indoors as well as outdoor premises. This might help
            the users to navigate with more ease following the animated,
            highlighted and outlined pathways. This Augmented Reality
            application behaves as a Virtual Guide.
            <br />
            Complex indoor spaces like college campus, office buildings,
            airports, shopping malls and healthcare centers can be easily
            navigated with the help of AR Find my way mobile application. By
            using the AR Find my way, it helps users to navigate in real time,
            easily within indoors and outdoors during a more engaging and
            interactive way. Unlike other GPS, this AR Find my way application
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Image
              className={styles.img}
              alt="box"
              src="/ar-types/location-based.jpeg"
              width={320}
              height={240}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2
          className={styles.subtitle}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Augmented Reality Story telling/Coloring book
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            Storytelling Strategies offered by AR Technology - AR is one of the
            best ways to narrate stories to young children. This technology
            delivers an immersive div experience to the learners. Businesses are
            taking their services to a new dimension using this advanced
            technology. Using the AR technology now you can Color with so much
            fun! The AR Coloring App uses live texturing of Augmented Reality
            Characters, combines physical coloring with state-of-the-art
            Augmented Reality Technology to bring you an extraordinarily magical
            experience. See the colored images that come magically to life while
            you&apos;re still working on coloring them.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image
              className={styles.img}
              alt="box"
              src="/services/color.jpg"
              width={320}
              height={240}
            />
          </div>
        </div>
      </div>

      <Footer color="white" />
    </div>
  );
}

export default Industries;
