import { Link } from 'react-router-dom'
import styles from './Card.module.css'

interface ICard {
    href: string
    text: string
    thumb: string
}

export function Card ({href, text,thumb}: ICard){
    return (
        <Link to={href}> className={styles.card}
        <img src={thumb} />
        <span>{text}</span>
        </Link>
    )
}