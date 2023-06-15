import Header from "./Header";
import Messages from "./Messages";
import ComposeBar from "./ComposeBar";
import Message from "../classes/Message";
import styles from "./Conversation.module.css";


export default function Conversation() {
    return (
        <div className={styles.Conversation}>
            <Header user={
                {name: "Michael Laymon"}
            } />
            <Messages messages={[
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Response", sender: "Nathaniel", timestamp: new Date("2023-06-14T13:47:10")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
                new Message({message: "Hello, world!", sender: "Michael", timestamp: new Date("2023-06-13T19:21:00")}),
            ]} />
            <ComposeBar />
        </div>
    )
}