import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar123'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'
import Sidebar123 from '../components/Sidebar123'

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext)

  return (
    <div className="w-full h-screen p-2 sm:px-[5%] sm:py-[2%]">
      <div
        className={`bg-white/10 backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${
          selectedUser
            ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
            : 'md:grid-cols-2'
        }`}
      >
        <Sidebar123 />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
