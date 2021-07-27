import styles from "../styles/Contact.module.scss";
import { useForm, ValidationError } from "@formspree/react";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";
function Contact() {
  const [state, handleSubmit] = useForm("xnqlvyag");
  let msg = "";

  if (state.succeeded) {
    msg = "Email Sent Sucessfully";
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.iconcontainer}>
          <Link href="https://www.facebook.com/carealities" passHref={true}>
            <div className={styles.icons}>
              <FacebookIcon style={{ fill: "white" }} />
            </div>
          </Link>
          <Link href="https://wa.me/message/XACALORIU55MJ1" passHref={true}>
            <div className={styles.icons}>
              <WhatsAppIcon style={{ fill: "white" }} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/carealities/" passHref={true}>
            <div className={styles.icons}>
              <InstagramIcon style={{ fill: "white" }} />
            </div>
          </Link>

          <Link href="https://twitter.com/_CAREALITIES_" passHref={true}>
            <div className={styles.icons}>
              <TwitterIcon style={{ fill: "white" }} />
            </div>
          </Link>
        </div>
        <div className={styles.containerContact} id="contact">
          <div className={styles.contactTitle}>
            <h1>
              <div
                className={styles.block}
                id="works-main"
                data-aos="zoom-in-up"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                {" "}
                GET &nbsp;{" "}
              </div>
              <div
                className={styles.block}
                id="works-main"
                data-aos="zoom-in-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                {" "}
                IN &nbsp;
              </div>
              <div
                className={styles.span}
                id="works-main"
                data-aos="zoom-in-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                TOUCH
              </div>
            </h1>
            <span
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="500"
            >
              <Link href="mailto: aravindhr@carealities.com" passHref={true}>
                <h2 className={styles.text} style={{ color: "white" }}>
                  Email : aravindhr@carealities.com
                </h2>
              </Link>
            </span>
          </div>
          <div
            className={styles.contactUs}
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                id="name"
                type="text"
                name="name"
                placeholder="NAME"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
                placeholder="EMAIL"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input
                className={styles.input}
                id="number"
                type="number"
                name="number"
                placeholder="CONTACT NUMBER (OPTIONAL)"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                placeholder="MESSAGE"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className={styles.button}
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
              <p> {msg} </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
