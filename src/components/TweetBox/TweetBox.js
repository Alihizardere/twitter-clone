/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@mui/material/'
import db from '../../firebase/firebase'

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState([])

  const sendTweet = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      displayName: 'Yazıyor...',
      username: '@alihizardere',
      verified: true,
      text: tweetMessage,
      image: '',
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    })
    setTweetMessage('')
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>

        <Button onClick={sendTweet} type="submit" className="tweetBox-btn">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default Tweetbox
