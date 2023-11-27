import React from 'react'
import '../edirprofile/editprofile.css'
import img from '../profile/img.png'
import { ImCross } from "react-icons/im";

const EditProfile = (props) => {
    return (
        <div className='editprofilecontainer'>
       
           <span style={{marginLeft:'600px'}}><ImCross onClick={props.onClick}/></span> 
            <div className='paragraph' > Edit Profile</div>
            <hr />
            <div className='editProfile'>
                <p>Profile photo</p>
                <div className='profile'> <img src={img} style={{ width: '170px', height: '170px', borderRadius: '50%' }} /></div>

            </div>
            <hr />
            <div className='profileUsername' style={{ display: 'flex' }}>
                <div ><p>User Name</p></div>
                <div >
                    <p style={{ background: '#C1C5C3' }}>
                        Complete user name
                    </p>
                    <p>www.tiktok.com/@islamabad54690

                        Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>

                </div>

            </div>
            <hr />
            <div className='profileUsername' style={{ display: 'flex' }}>
                <div ><p>Name</p></div>
                <div >
                    <p style={{ background: '#C1C5C3' }}>
                        Complete  name
                    </p>
                    <p>Your nickname can only be changed once every 7 days.</p>

                </div>

            </div>
            <div className='profileUsername' style={{ display: 'flex' }}>
                <div ><p>Bio</p></div>
                <div >
                    <p style={{ background: '#C1C5C3' }}>
                        .. Nature is the Art of ALLAH..❤️
                        https://www.youtube.com/@islamabadmyhome
                    </p>


                </div>

            </div>
        </div>
    )
}

export default EditProfile