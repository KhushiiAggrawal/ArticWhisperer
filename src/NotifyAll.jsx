import React from 'react'

const NotifyAll = () => {
    return (
        <>
            <div className='wrapper'>
                <div className='content'>
                    <img src="/icon/Logo.png" alt="logo" className="logo" />
                    <h2>Send Notification</h2>
                    <div className="innerDiv">
                        <div className="inputdiv">
                            <p>Message</p>
                            <textarea rows="4"
                                type="text"
                                placeholder="Type your message here...."
                                required
                            ></textarea>
                        </div>
                        <a>Notify one ?</a>
                        <button>
                            Send Notification
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotifyAll
