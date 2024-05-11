import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex shadow-sm p-2 ' >
        <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className='font-bold px-1 text-sm'>{name}</span>
        <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage