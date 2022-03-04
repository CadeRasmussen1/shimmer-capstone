import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './mainpage.css'
import AddSongForm from './addsong'
import songCard from './songcard'

const errCallback = err => console.log(err)

export default function Mainpage(){
    
    const [songs, setSongs] = useState([])
    
    const getSongs = () => axios
        .get('http://localhost:4001/api/songs')
        .then((res) => {setSongs(res.data)})
        .catch(errCallback)

    useEffect(() => getSongs(), [])
    console.log('songs',songs)
    return (
        <div className='mainpage-container'>
                <p className='mainpage-title-content'>Shimmer</p>
            <div className='mainpage-content'>
                <div className='mainpage-addsong'>
            <AddSongForm songAddedCallback = {() => {
                console.log('song added')
                getSongs()
            }}/>
                </div>
                <div className='mainpage-songcard'>
            {songs.length > 0 
                && (songs.map((s, i) => {
                    return (<div 
                        key={i}>{
                            songCard({...s, songDeletedCallback: (id) => {
                                console.log('song deleted', id)
                                getSongs()
                            }})}
                </div>)
                }))}
                </div>
            </div>
        </div>)
}