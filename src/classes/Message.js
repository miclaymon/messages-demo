

export default class Message {
    constructor({message, sender, timestamp}) {
        this.content = message;
        this.sender = sender;
        this.timestamp = timestamp;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
}