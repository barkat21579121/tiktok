import React from 'react'
import '../newsfeed/newsfeed.css'
import img from '../profile/img.png'
import { FaRegEdit } from "react-icons/fa";

const NewsFeed = (props) => {
    return (
        <div className='newsfeedContainer'>

            <div className='profile'> <img src={img} style={{ width: '170px', height: '170px', borderRadius: '50%' }} />
                <div className='profileConatainer'> <p className='profileName'>User Name</p>
                    <p className='name'>Name</p>
                    <button style={{
                        background: 'white', color: 'black', border: '1px solid black',
                        height: '50px', fontSize: '20px'
                    }}><FaRegEdit style={{ width: '50px' }} onClick={props.onClick} /> Edit Profile </button>
                </div>
            </div>
            <div style={{display:'flex' ,justifyContent:'space-around', fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold'}}>
                <p> 30 Following</p>
                <p> 40 Followers</p>
                <p> 1000 Likes</p>

            </div>
            <div  style={{display:'flex' ,justifyContent:'space-around', fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold'}}><p>
            .. Nature is the Art of ALLAH..❤️
https://www.youtube.com/@islamabadmyhome</p></div>
        </div>
    )
}

export default NewsFeed