import React from 'react';

interface MessageListProps {
  messages: string[];
  onDeleteMessage: (index: number) => void;
  onCopyMessage: (message: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, onDeleteMessage, onCopyMessage }) => {
  return (
    <ul className="p-5 rounded w-[80%] flex justify-center flex-col sm:flex-row sm:flex-wrap items-center gap-2">
      {messages.map((message, index) => (
        <li key={index} className=" lg:w-[40%] w-[80%] p-2 bg-blue-400 rounded flex justify-between items-center">
          <div>
            {message}
          </div>
          <div className="flex gap-2 h-10 items-center sm:flex-row flex-col min-h-20 sm:min-h-10">
            <button className="p-1 border-2 hover:text-blue-400 hover:bg-white  border-white rounded" onClick={() => onDeleteMessage(index)}>DELETE</button>
            <button className="p-1 border-2 hover:text-blue-400 hover:bg-white  border-white rounded" onClick={() => onCopyMessage(message)} >COPY</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
