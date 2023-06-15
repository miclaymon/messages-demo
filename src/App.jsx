import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Conversation from './components/Conversation';
import Conversations from './components/Conversations';
import './App.css';


const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);
const customAuthTheme = {
    default: {
        colors: {
            brand: 'hsl(153 60.0% 53.0%)',
            brandAccent: 'hsl(154 54.8% 45.1%)',
            brandButtonText: 'white',
            // ..
        },
    },
    dark: {
        colors: {
            brandButtonText: 'white',
            defaultButtonBackground: '#2e2e2e',
            defaultButtonBackgroundHover: '#3e3e3e',
            //..
        },
    },
    // You can also add more theme variations with different names.
    evenDarker: {
        colors: {
            brandButtonText: 'white',
            defaultButtonBackground: '#1e1e1e',
            defaultButtonBackgroundHover: '#2e2e2e',
            //..
        },
    },
};

function App() {
    const [session, setSession] = useState(null);
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
  
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        });
  
        return () => subscription.unsubscribe()
    }, [])
  

    const selectedConversation = "Michael Laymon"; // TODO: use ID instead of name
    if (!session) {
        return (
            <div style={{padding: "3em"}}>
                <Auth supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    // theme="dark"
                    providers={['google', 'discord', 'github']}
                    // onlyThirdPartyProviders={true}
                    // socialColors={true}
                    // socialButtonStyle="icon"
                    // socialLayout="horizontal"
                />
            </div>
        );
    }
    else {
        return (
            <div className="App" style={{height: "100vh"}}>
                {selectedConversation ?
                    <Conversation id={selectedConversation} /> :
                    <Conversations />
                }
            </div>
        );
    }
}

export default App;
