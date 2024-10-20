import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'; // Import spinner component
import Navbar from '../HomePage/Navbar';

function ChatBox() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const getDiseaseNameFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('disease');
  };

  useEffect(() => {
    const diseaseName = getDiseaseNameFromQuery();
    if (diseaseName) {
      const initialMessage = `what is ${diseaseName} and how to cure this?`;
      setMessage(initialMessage);
      handleSendMessage(initialMessage);
    }
  }, [location]);

  const handleSendMessage = async (inputMessage) => {
    if (!inputMessage && !message) return;

    const userMessage = { user: 'You', message: inputMessage || message };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', {
        prompt: inputMessage || message,
      });

      const botResponse = {
        user: 'Bot',
        message: response.data.response || 'Sorry, I didn’t understand that.',
      };

      setChatHistory((prevHistory) => [...prevHistory, botResponse]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const botErrorResponse = {
        user: 'Bot',
        message: 'Oops, something went wrong. Please try again later.',
      };
      setChatHistory((prevHistory) => [...prevHistory, botErrorResponse]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full h-screen py-5 dark:bg-gray-900">
      <Navbar/>
      <div className="flex flex-col w-11/12 h-full overflow-hidden bg-white rounded-lg md:w-8/12 lg:w-6/12 ">
        {/* Chat Header */}
        <header className="flex items-center justify-between p-4 text-black">
          <div className="text-2xl font-semibold">SkinScan</div>
        </header>

        {/* Chat Display */}
        <div className="flex-1 p-4 overflow-hidden">
          <ScrollToBottom className="h-full mb-4 overflow-y-auto rounded hide-scrollbar">
            {chatHistory.length === 0 ? (
              <p className="text-lg text-gray-400">Start by asking about your symptoms...</p>
            ) : (
              chatHistory.map((chat, index) => (
                <div key={index} className={`mb-4 flex hide-scrollbar ${chat.user === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <p className={`text-base inline-block max-w-lg px-4 py-3 rounded-lg break-words ${chat.user === 'Bot' ? 'bg-blue-100 text-left' : 'bg-gray-100 text-right'}`}>
                    <strong>{chat.user}:</strong> {chat.message}
                  </p>
                </div>
              ))
            )}

            {/* Loader for bot response */}
            {loading && (
              <div className="flex justify-center mt-4">
                <ClipLoader size={30} color="#3498db" loading={loading} />
              </div>
            )}
          </ScrollToBottom>
        </div>

        {/* Input Section */}
        <form className="flex p-4 space-x-2" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
          <input
            type="text"
            className="flex-1 px-4 py-3 border border-gray-300 text-lg rounded-lg outline-none"
            placeholder="Type your question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
