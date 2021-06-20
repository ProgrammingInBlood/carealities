import Image from "next/image";
import { useRef } from "react";
import styles from "./Services.module.scss";

function Services({ url, title }) {
  const card = useRef();

  function cardClicked() {
    console.log(card);
  }
  return (
    <div
      className={styles.container}
      ref={card}
      onClick={cardClicked}
      data-aos="zoom-in-up"
      data-aos-duration="500"
      data-aos-delay="400"
    >
      <Image src={url} width="64px" height="64px" layout="fixed" alt="lol" />
      <p className={styles.text}>{title}</p>
    </div>
  );
}

export default Services;
