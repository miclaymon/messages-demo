import classNames from 'classnames';
import MessageClass from '../classes/Message';
import styles from './Message.module.css';

export function Timestamp(timestamp) {
    return (
        <div className={styles.Timestamp}>
            <h6>{timestamp}</h6>
        </div>
    )
}

export default function Message({message, id}) {
    const { content, sender, timestamp } = message;
    if (!content && !sender && timestamp)
        return <Timestamp timestamp={timestamp} />
    const type = (sender === "Michael") ? "sent" : "received";
    return (
        <div className={classNames(styles.Message, styles[type])} id={id}>
            <div className={classNames(styles.Bubble)}>
                <div className="message-content">
                    <p>{content}</p>
                </div>
            </div>
            <div className={styles.expanded}>
                <div className={styles["message-timestamp"]}>
                    <p>{String(timestamp)}</p>
                </div>
            </div>
            <span className={styles.tail}></span>
        </div>
    )
}