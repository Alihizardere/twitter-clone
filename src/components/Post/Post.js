import React from 'react'
import './Post.css'
import { GoVerified } from 'react-icons/go'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { MdOutlineRepeat, MdFavoriteBorder } from 'react-icons/md'
import { IoShareOutline } from 'react-icons/io5'
import { Avatar } from '@mui/material/'

function Post({ displayName, username, verified, text, avatar, image }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              {displayName}
              <span>
                {verified && <GoVerified className="verified-icon" />}{' '}
                {username}
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post-footer">
          <HiOutlineChatBubbleOvalLeft className="footer-icon" />
          <MdOutlineRepeat className="footer-icon" />
          <MdFavoriteBorder className="footer-icon" />
          <IoShareOutline className="footer-icon" />
        </div>
      </div>
    </div>
  )
}

export default Post
