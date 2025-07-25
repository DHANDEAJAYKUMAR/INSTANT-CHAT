import React, { useContext } from 'react';
import Sidebar from '../components/ChatSidebar ';
import ChatContainer from '../components/ChatContainer';
import RightSidebar from '../components/RightSidebar';
import { ChatContext } from '../../context/ChatContext';
import ChatSidebar from '../components/ChatSidebar ';

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="w-full h-screen p-2 sm:px-[5%] sm:py-[2%]">
      <div
        className={`bg-white/10 backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${
          selectedUser
            ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
            : 'md:grid-cols-2'
        }`}
      >
        <ChatSidebar />
        <ChatContainer />
        {selectedUser && <RightSidebar />}
      </div>
    </div>
  );
};

export default HomePage;
