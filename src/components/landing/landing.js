import "./landing.css"
import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react'
import axios from 'axios'


const errCallback = err => console.log(err)

export default function Landing() {
    const [songs, setSongs] = useState([])
    
    useEffect(() => {
        //axios call
        const getAllSongs = () => axios.get('/api/getAllSongs').then((res) => {setSongs(res.data)}).catch(errCallback)
        

    }, [])
    return (

        <div className="landing-container">
            <div className="landing-content">
                <p className="page-title-content">Shimmer</p>
                
                <Link to="/signIn">
                    <button className="sign-in-btn">Sign in</button>
                </Link>
                <p className="Dont-have">
                    {" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            <span className="register-btn-landing">Register Here</span>
          </Link>
                </p>
            </div>
        </div>
    )
}
