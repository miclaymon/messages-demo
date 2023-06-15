import styles from './ComposeBar.module.css';


export default function ComposeBar() {
    return (
        <footer className={styles.ComposeBar}>
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
        </footer>
    )
}