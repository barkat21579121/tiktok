import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import tiktok from '../home/tiktok.png'
import '../mainNavbar/mainnav.css';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { IoLanguageSharp } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa6";
import NewsFeed from '../newsfeed/NewsFeed';
import EditProfile from '../edirprofile/EditProfile';

const Profile = () => {
    const [display ,setDisplay]=useState(false)
    const [profile , setProfile]=useState(true)
    return (<>     
     <div className="navbar-container" >
        <div className="left-section">
            <img src={tiktok} alt="Logo" className="logo" />
        </div>
        <div className="center-section">
            <div className="search-container" >
                <input className='search' type="text" placeholder="Search" />
                <  CiSearch className="fa fa-search" style={{ cursor: 'pointer' }} />
            </div>
        </div>
        <div className="right-section">
            <FaPlus className='btn1Logo' style={{ cursor: 'pointer' }} />  <input type='text' className='btn1' value='Upload' />
            <Link to='/'>     <button className='btn2'>Login</button></Link>
            <SlOptionsVertical  onClick={()=>setDisplay(true)} onMouseMove={()=>setDisplay(false)}
             className='optionnav' style={{ cursor: 'pointer' , }} />



        </div>
         
    </div>
   { profile ? <div style={{position:'fixed'}}> <NewsFeed onClick={()=>setProfile(false)}/> </div> : <div style={{position:'fixed'}}>
     <EditProfile onClick={()=>setProfile(true)}/> </div> }
    {/* <div><EditProfile/></div> */}
  
        {/* <hr style={{ marginTop: "-330px" }} /> */}
        <div className='sideBar' style={{ width: '300px', maxHeight: '800px', marginTop: '-150px' , position:'sticky'}}>
            <div style={{ display: 'flex' }} ><Link to='/main'><IoMdHome style={{ width: '50px',marginTop:'19px', cursor: 'pointer', height: 'auto' }} /></Link>
                <p style={{ fontSize: "30px", fontWeight: 'bolder' }}>For You</p></div>
            <div style={{ display: 'flex' }}><FaUserFriends style={{ width: '50px', cursor: 'pointer', height: 'auto' }} />
                <p style={{ fontSize: "30px", fontWeight: 'bolder' }}>Following</p></div>
            <div style={{ display: 'flex' }}><MdOutlineExplore style={{ width: '50px', cursor: 'pointer', height: 'auto' }} />
                <p style={{ fontSize: "30px", fontWeight: 'bolder' }}>explore </p></div>
            <input value="new" className='newinput'  style={{position:'absolute' , top:'240px',left:'176px' }}/>
            <div style={{ display: 'flex',background:"bisque"  }}> <IoIosPerson style={{ width: '50px', cursor: 'pointer', height: 'auto' }} />
                <p style={{ fontSize: "30px", fontWeight: 'bolder',}}>Profile</p></div>

        </div>
      { display? <div className='languageChange'>
            <div style={{ display: 'flex' }} ><IoLanguageSharp style={{ width: '50px', cursor: 'pointer', height: 'auto' }} />
                <p style={{ fontSize: "20px", fontWeight: 'bold' }}>language</p></div>
            <div style={{ display: 'flex' }} ><AiOutlineQuestionCircle style={{ width: '50px', cursor: 'pointer', height: 'auto' }} />
                <p style={{ fontSize: "20px", fontWeight: 'bold' }}>feedback & help</p></div>
            <div style={{ display: 'flex' }} ><FaRegKeyboard style={{ width: '40px', cursor: 'pointer', height: 'auto' }} />
                <p style={{ fontSize: "20px", fontWeight: 'bold' }}>keyboard & shortcuts</p></div>

        </div> : ""}
     
    </>

    )
}


export default Profile