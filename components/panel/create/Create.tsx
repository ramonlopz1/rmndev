import styles from "./Create.module.css";
import UploadProject from "./UploadProject";

export default function Create(): JSX.Element {
  return (
    <main className={styles.content}>
      <div className={styles.main_box}>
        <h2 className={styles.title}>Painel</h2>
        <UploadProject />
      </div>
    </main>
  );
}
