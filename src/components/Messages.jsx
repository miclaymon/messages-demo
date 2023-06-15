import classNames from "classnames";
import MessageBubble, { Timestamp } from "./Message";
import Message from "../classes/Message";
import styles from "./Messages.module.css";
import { useEffect } from "react";

/**
 * Renders a list of messages
 * @param {*} messages - An array of Message objects
 * @returns A list of Message components
 */
export default function Messages({messages}) {
    messages.forEach((message, index) => {
        if (index === 0) {
            return <Timestamp key={index} timestamp={message.timestamp} />
        }
        else if (message.timestamp.getDate() !== messages[index - 1].timestamp.getDate()) {
            return <Timestamp key={index} timestamp={message.timestamp} />
        }
        else {
            return <MessageBubble key={index} message={message} id={index} />
        }
    });

    /**
     * Scrolls to the bottom of the messages
     */
    const scrollToBottom = () => {
        const messagesEnd = document.getElementById("messagesEnd");
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom(); // scroll to bottom of messages on load and when messages change
    }, [messages]);

    return (
        <main className={classNames(styles.Messages, "scollview")}>
            {messages.map((message, index) => {
                // insert timestamps when messages are more than 1 hour apart
                // if (index === 0) {
                //     return <Timestamp key={index} timestamp={message.timestamp} />
                // }
                // else if (message.timestamp.getDate() !== messages[index - 1].timestamp.getDate()) {
                //     return <Timestamp key={index} timestamp={message.timestamp} />
                // }
                // else
                    return <MessageBubble key={index} message={message} id={index} />
            })}
            <div id="messagesEnd"></div>
        </main>
    )
}