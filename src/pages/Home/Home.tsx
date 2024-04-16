import { Button, ButtonVariant } from "../../components/common/Button";
import styles from './Home.module.css'

export function Home(){
  return (
    <div className={styles.container}>
      <Button variant={ButtonVariant.Default}>Quero Adotar</Button>
      <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
    </div>
  );
}