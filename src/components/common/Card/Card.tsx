import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import thumbDefault from '../../../assets/thumb-default.jpg'

interface ICard {
    href: string;
    text: string;
    thumb: string;
}

export function Card({ href, thumb, text }: ICard) {
    return (
        <Link to={href} className={styles.card}>
            <img src={thumb} onError={(e) => e.currentTarget.src = thumbDefault} />
            <span>{text}</span>
        </Link>
    );
}