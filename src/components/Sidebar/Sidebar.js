import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption';
import  './Sidebar.css'
import Button from '@mui/material/Button';
import { FaTwitter } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { FiSearch, FiMail, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsCardList, BsPerson } from 'react-icons/bs';



function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
        <FaTwitter className="twitter-logo"/>

      {/* SidebarOptions */}
        <SidebarOption active Icon={<MdHome/>} text="Home"/>
        <SidebarOption  Icon={<FiSearch/>} text="Explore"/>
        <SidebarOption Icon={<IoMdNotificationsOutline/>} text= "Notifications"/>
        <SidebarOption Icon={<FiMail/>} text="Messages"/>
        <SidebarOption  Icon={<FiBookmark/>} text="Bookmarks"/>
        <SidebarOption Icon={<BsCardList/>} text= "Lists"/>
        <SidebarOption  Icon={<BsPerson/>} text="Profile"/>
        <SidebarOption Icon={<FiMoreHorizontal/>} text= "More"/>

      {/* Button */}
      <Button variant="outlined" className="sidebar-btn" >
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
