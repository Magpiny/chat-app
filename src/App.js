import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './componentss/ChatFeed';

const App = () => {
  return ( 
    <ChatEngine
			height='100vh'
			userName='magpiny'
			userSecret='123123'
			projectID='ea860e06-9235-4a1b-a295-62d9b9ad1a52'

			renderChatFeed = { (chatAppProps)=><ChatFeed { ...chatAppProps } /> }
      
		/>
    
  );
}
export default App;
