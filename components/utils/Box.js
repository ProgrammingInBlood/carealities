import styles from "./Box.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

function Box({ title, text, url, anim }) {
  const [transcute, setTranscute] = useState(true);
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width >= 1100) {
      setShow(true);
    }
  }, [width]);

  let finalString = 0;

  if (width < 1100) {
    finalString = transcute ? text.slice(0, 100) + "..." : text;
  } else {
    finalString = text;
  }

  function isTranscute() {
    setTranscute(!transcute);
  }
  return (
    <>
      <div
        className={styles.content}
        data-aos={anim}
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div className={styles.banner}>
          <Image
            className={styles.img}
            src={url}
            width="320"
            height="240"
            alt="lol"
          />
        </div>
        <div className={styles.textbox}>
          <h2 className={styles.subtitle}>{title}</h2>
          <p className={styles.text}>{finalString}</p>
          <div
            className={styles.content}
            style={{ justifyContent: "center", margin: 0, padding: 0 }}
          >
            <button
              className={styles.button}
              onClick={isTranscute}
              style={{ display: show ? "none" : "block" }}
            >
              {transcute ? "Read More" : "Read Less"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
