import React from 'react'
import Spinner from './Spinner'
import { useState } from 'react';


const Home = () => {

    return (
        <>
            <div className='wrapper'>
                <div className='content'>
                    <img src="/icon/Logo.png" alt="logo" className="logo" />
                    <h2>Send Notification</h2>
                    <div className="innerDiv">
                        <div className="inputdiv">
                            <p>User Id</p>
                            <input
                                type="text"
                                placeholder="User id"
                                required
                            ></input>
                        </div>
                        <div className="inputdiv">
                            <p>Message</p>
                            <textarea rows="4"
                                type="text"
                                placeholder="Type your message here...."
                                required
                            ></textarea>
                        </div>
                        <a>Notify all ?</a>
                        <button>
                            Send Notification
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
