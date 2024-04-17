import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Button, ButtonVariant } from '../Button';

interface IHeader {
  showReturn?: boolean;
}

export function Header({ showReturn }: IHeader) {
  return (
    <header className={styles.header}>
      {showReturn && (
        <Link to="/pets">
          <Button variant={ButtonVariant.Text}>Voltar</Button>
        </Link>
      )}
      <Link to="/admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </Link>
    </header>
  );
}