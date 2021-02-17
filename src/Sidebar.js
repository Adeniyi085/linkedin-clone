import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
const recentItem = (topic) => (
    <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
)
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Oluwatobi Adegelu</h2>
                <h4>adeniyi.adegelu@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,567</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,237</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('design')}
                {recentItem('software development')}
                {recentItem('developer')}
                {recentItem('design thinking')}
                </div>
        </div>
    )
}

export default Sidebar
