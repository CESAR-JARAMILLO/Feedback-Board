import React from 'react'

interface ReplyProps {
    reply: string;

}

const Reply = ({ reply } : ReplyProps) => {
  return (
    <div>{reply}</div>
  )
}

export default Reply