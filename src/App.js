import { ChatEngine } from 'react-chat-engine';


import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;
  return ( 
    <ChatEngine
			height='98vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='ea860e06-9235-4a1b-a295-62d9b9ad1a52'
			renderChatFeed = { (chatAppState) => <ChatFeed { ...chatAppState } />   }
			onNewMessage={ () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
      
		/>
    
  );
}
export default App;
