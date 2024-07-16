"use client"

import React, { useState, useEffect } from 'react';
import MessageInput from '@/components/MessageInput';
import MessageList from '@/components/MessageList';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const storedMessages = sessionStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleAddMessage = (message: string) => {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  const handleCopyMessage = (message: string) => {
    navigator.clipboard.writeText(message)
  }

  return (
      <main className="flex justify-center w-full flex-col bg-blue-300 min-h-full">
        <section className="input-section flex justify-center">
          <MessageInput onAddMessage={handleAddMessage} />
        </section>
        <section className="mt-12 list-section flex justify-center">
          <MessageList messages={messages} onDeleteMessage={handleDeleteMessage} onCopyMessage={handleCopyMessage} />
        </section>
      </main>
  );
};

export default Home;
