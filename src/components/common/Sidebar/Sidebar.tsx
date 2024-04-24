import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { Toaster, toast } from 'sonner'

export function Sidebar() {
    function validate(event: React.MouseEvent) {
        const canAccess = false
        if (!canAccess) {
            event?.preventDefault()
            toast.error('Insira os dados do abrigo')
        }
    }
    return (
        <>
            <nav className={styles.sidebar}>

                <NavLink className={({ isActive }) => (isActive ? styles.active : '')}
                    to="/admin"
                    end>Meu Abrigo</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : '')}
                    to="/admin/pets"
                    onClick={validate}>
                    Pets</NavLink>
                <NavLink
                    to="/">Sair</NavLink>
            </nav>
            <Toaster position="top-center" richColors={true} />
        </>
    )
}