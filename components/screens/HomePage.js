import styles from "../styles/HomePage.module.scss";
import Link from "next/link";
import Image from "next/image";

function HomePage() {
  return (
    <div id="home" style={{ paddingTop: "100px", marginTop: "-100px" }}>
      <div className={styles.container}>
        <div
          className={styles.textbox}
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1 className={styles.bold}>
            <span
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              Next&nbsp;
            </span>
            <span
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              Generation&nbsp;
            </span>
            <span
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <span className={styles.gtext}>A</span>
              ugmented&nbsp;
            </span>
            <span
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              <span className={styles.gtext}>R</span>eality&nbsp;
            </span>
          </h1>
          <p
            className={styles.text}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            Welcome to{" "}
            <span className={styles.gtext} style={{ fontWeight: "700" }}>
              CAREALITIES
            </span>{" "}
            where your imagination invites you to create is almost limitless
          </p>
          <div className={styles.buttons}>
            <Link href="/#about" passHref={true}>
              <button
                className={styles.button}
                style={{ marginRight: 20 }}
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-delay="1200"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div
          className={styles.banner}
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="1200"
        >
          <div className={styles.circle}></div>
          <Image
            className={styles.hand}
            src="/hand.png"
            width={620}
            height={620}
            layout="fixed"
            alt="Hand"
          />
        </div>
        <div
          className={styles.banner2}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="1200"
        >
          <div className={styles.circle}></div>
          <Image
            className={styles.hand}
            src="/two-hands.png"
            width={620}
            height={620}
            layout="responsive"
            alt="hand"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
