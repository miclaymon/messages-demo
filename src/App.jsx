import logo from './logo.svg';
import './App.css';
import Conversation from './components/Conversation';
import Conversations from './components/Conversations';

function App() {
    const selectedConversation = "Michael Laymon"; // TODO: use ID instead of name
    return (
        <div className="App" style={{height: "100vh"}}>
            {selectedConversation ?
                <Conversation id={selectedConversation} /> :
                <Conversations />
            }
        </div>
    );
}

export default App;
