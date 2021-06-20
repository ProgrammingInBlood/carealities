import styles from "../styles/Footer.module.scss";

function Footer({ color }) {
  return (
    <div>
      <div className={styles.header} style={{ background: `${color}` }}>
        <div>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.parallax}>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(120, 87, 254,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255, 98, 227,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255, 98, 227,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#7857fe" />
            </g>
          </svg>
        </div>
      </div>

      <div className={`${styles.contents} ${styles.flex}`}>
        <p>Copyright © 2021 CAREALITIES. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
