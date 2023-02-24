import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@material-ui/icons/Close";
import MenuButton from "@material-ui/icons/Menu";
import styles from "../styles/NavBar.module.scss";

//TESTINGGG

import { useEffect } from "react";

function Navbar() {
  const Router = useRouter();
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function goHome() {
    Router.push("/");
  }
  //TESTING END

  // const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0);

  function hideIt() {
    setClick(false);
  }

  useEffect(() => {
    setWidth(window.innerWidth);

    if (width <= 768) {
      hideIt();
    }
  }, [width]);

  return (
    <div className={styles.container}>
      <div onClick={goHome}>
        <Image
          className={styles.logo}
          src="/hero.png"
          height={75}
          width={200}
          alt="logo"
        />
      </div>

      <div className={styles.menuicon} onClick={handleClick}>
        {click ? (
          <CloseIcon style={{ fill: "#ad2bf3", transform: "scale(1.5)" }} />
        ) : (
          <MenuButton style={{ fill: "#ad2bf3", transform: "scale(1.5)" }} />
        )}
      </div>
      <ul className={click ? styles.menuactive : styles.menu}>
        <li className={styles.list} onClick={hideIt}>
          <Link href="/#home">Home</Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.list} onClick={hideIt}>
          <Link href="/#about">About</Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.list} onClick={hideIt}>
          <Link href="/#services">Services</Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.list} onClick={hideIt}>
          <Link href="/#product">Products</Link>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.list} onClick={hideIt}>
          <Link href="/#contact">Contact Us</Link>
          <div className={styles.underline}></div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
