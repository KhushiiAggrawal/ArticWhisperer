import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Spinner from './Spinner'
import axios from "axios" 
import toast from "react-hot-toast"

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [notiMsg, setNotiMsg] = useState("");

    const notify = async(e)=>{
        e.preventDefault()
        try { 
            setLoading(true); 
            const { data } = await axios.post(`https://articmailserver.onrender.com/notifications/notify`, 
              { id , notiMsg }, 
              { 
                headers: { 
                  "Content-Type": "application/json", 
                }, 
                withCredentials: true, 
              } 
            ); 
            setLoading(false);
            console.log(data.message);
            toast.success("User Notified.")
            setNotiMsg("");
          } catch (error) { 
            if (error.response.data) { 
              console.log(error.response.data.message); 
            } 
            setLoading(false); 
            toast.error(error.response.data.message);
          }
    }

    return (
        <>
            <div className='wrapper'>
                <form className='content'>
                    <img src="/icon/Logo.png" alt="logo" className="logo" />
                    <h2>Send Notification</h2>
                    <div className="innerDiv">
                        <div className="inputdiv">
                            <p>User Id</p>
                            <input
                                type="text"
                                placeholder="User id"
                                required
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            ></input>
                        </div>
                        <div className="inputdiv">
                            <p>Message</p>
                            <textarea rows="4"
                                type="text"
                                placeholder="Type your message here...."
                                required
                                value={notiMsg}
                                onChange={(e) => setNotiMsg(e.target.value)}
                            ></textarea>
                        </div>
                        <Link to="/notifyAll" className='a'>Notify all ?</Link>
                        <button onClick={notify}>
                            Send Notification
                        </button>
                    </div>
                </form>
            </div>
            {loading && <Spinner />}
        </>
    )
}

export default Home
