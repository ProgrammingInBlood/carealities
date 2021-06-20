import Navbar from "../components/screens/NavBar";
import styles from "../styles/Model.module.scss";
import Back from "../components/utils/Back";
import Image from "next/image";
import Footer from "../components/screens/Footer";
function models() {
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
          3D Modeling and Animation Services
        </h1>
        <p
          className={styles.text}
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          3D modelling is a technique in computer graphics to create a
          mathematical representation of a 3D object or shape. A creative mind
          knows the way to derive best from scratch. The Animators and Artists
          at Carealities rely on 3D Modeling and Animations to bring your idea
          to life.
        </p>
      </div>
      <Image
        src="/products/3d-modeling.jpg"
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
          3D Characters Designing
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            After gathering all your ideas and your concept art, our artists
            create the 3D models with the best software like Maya LT, Blender,
            etc. We then, give colors to your models to give them a distinct
            look to bring them to life. Since we a native AR development company
            our creative heads passionately penetrate the detailing while
            creating the 3D Models, and we promise to deliver you the best
            quality of work.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image
              className={styles.img}
              src="/products/character.jpg"
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
          3D Product Modeling
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            At Carealities our team creates a lively 3D visualization of
            products. With the knowledge of using advanced 3D modeling software,
            our experienced and talented designers are perfectly balanced to
            produce high-quality and most accurate prototypes of a wide variety
            of products.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Image
              className={styles.img}
              src="/products/product.jpg"
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
          3D Environment and Props
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            In any of the 3D productions and creations, there&apos;s getting to
            be the necessity of 3D Environments and Props to assist set the
            stage for the storyline. This may be processed for each sector like
            Gaming, AR/VR, Industries, Real-Time tracking, etc. No 3D
            Environment will haven&apos;t any 3D characters to measure in. With
            3D Environment and Props, is how your idea comes into reality with a
            proper attractive and interesting storyline.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image
              className={styles.img}
              src="/products/env.jpg"
              width={320}
              height={240}
              alt="boxs"
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
          Photogrammetry
        </h2>
        <div className={styles.flexbox}>
          <p
            className={styles.text}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            Our team at Carealities are dedicated to provide high quality
            rendered model of a terrain, building, anything through aerial
            photographs by combing with the best software. Photogrammetry is
            basically an art and science of extracting a high- quality 3D model
            from photographs and real-life objects.
          </p>
          <div
            className={styles.imagebox}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Image
              className={styles.img}
              src="/products/photo.jpg"
              width={320}
              height={240}
              alt="box"
            />
          </div>
        </div>
      </div>
      <Footer color="white" />
    </div>
  );
}

export default models;
