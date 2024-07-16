// components/MessageInput.tsx
import React, { useState, ChangeEvent } from 'react';

interface MessageInputProps {
  onAddMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onAddMessage }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddMessage = () => {
    if (inputValue.trim() !== '') {
      onAddMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="mt-12 py-12 sm:w-[50%] w-[80%] bg-blue-400 text-black flex justify-center items-center flex-col rounded">
      <div className="p-5">
        <h1 className="text-[2rem] text-white">MENSAGENS PRONTAS PARA CONVERSAS</h1>
      </div>

      <div className=" w-full items-center flex justify-center gap-5">
        <textarea className="resize-none w-[70%] rounded p-2"
          placeholder="Digite sua mensagem..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="border-2 border-white text-white p-2 rounded hover:text-blue-400 hover:bg-white   " onClick={handleAddMessage}>ADD</button>
      </div>
    </div>
  );
};

export default MessageInput;
