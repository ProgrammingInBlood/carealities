import styles from "./Squarebox.module.scss";
import Image from "next/image";

import { useRouter } from "next/router";

function Squarebox({ url, title, anim, delay, path }) {
  const Router = useRouter();

  function OpenPage() {
    Router.push(`/${path}`);
  }
  return (
    <div
      className={styles.container}
      data-aos={anim}
      data-aos-duration="500"
      data-aos-delay={delay}
      onClick={OpenPage}
    >
      <Image
        className={styles.img}
        src={url}
        width={320}
        height={240}
        alt="box"
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Squarebox;
