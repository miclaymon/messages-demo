import styles from './Header.module.css';


export default function Header({user}) {
    const { name, profilePicture } = user;
    return (
        <header className={styles.Header}>
            <div className="Header__left w-auto">
                <button>Back</button>
            </div>
            <div className="Header__center w-auto">
                <img
                    src="https://via.placeholder.com/50"
                    alt={
                        name
                            .split(" ") // split the name into an array of words
                            .slice(0, 2) // take the first two words
                            .map(word => word[0]) // take the first letter of each word
                            .join("") // join the letters into a string (initials)
                    }
                />
                <h1>{name}</h1>
            </div>
            <div className="Header__right  w-auto">
                <button>Details</button>
            </div>
        </header>
    )
}