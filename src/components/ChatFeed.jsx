import MessageForm from './MessageForm';
import MyMssg from './MyMssg';
import TheirMssg from './TheirMssg';

const ChatFeed = (props) => {
    const { chats, activeCharts, userName, messages } = props;
    const chat = chats && chats[activeCharts];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index)=>{
            const message = messages(key)
            const lastMessage = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={ `msg_$[index]` } style={ { width:'100%' } }>
                    <div className="message-block">
                        {
                            isMyMessage ? <MyMssg message={ message } /> : <TheirMssg message={ message } lastMessage={ messages[lastMessageKey] } />
                        }

                    </div>

                    <div className="read-receipts" style={ { marginRight : isMyMessage ? '18px ': '0px', marginLeft : isMyMessage ? '0px' : '68px' } }>
                          render-receipts
                    </div>

                </div>
            )

        })
    }


    if(!chat) return "Loading ..."

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div chat-title>
                    { chat?.title }

                </div>
                <div chat-subtitle>
                    { chat.people.map((person) => ` ${ person.person.username }`) }
                </div>
            
            </div>
            { renderMessages() }

            <div style={ {height:'100px'} } />

            <div className = "message-form-container">
                <MessageForm { ...props } chatId = { activeChart } />

            </div>
            
        </div>
    )
}

export default ChatFeed;