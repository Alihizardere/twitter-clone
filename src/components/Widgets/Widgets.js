import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import { FiSearch } from 'react-icons/fi'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <FiSearch />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-container">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed
          tweetId={'1581764872702132224'}
          options={{ height: 300, width: 350 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400, width: 350 }}
        />
      </div>
    </div>
  )
}

export default Widgets
