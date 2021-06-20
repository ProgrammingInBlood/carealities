import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./Back.module.scss";
import { useRouter } from "next/router";

function Back() {
  const router = useRouter();
  function goBack() {
    router.back();
  }
  return (
    <>
      <button className={styles.button} onClick={goBack}>
        <ArrowBackIcon /> Back
      </button>
    </>
  );
}

export default Back;
