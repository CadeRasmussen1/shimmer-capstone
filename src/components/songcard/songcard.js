import React from 'react'
import axios from 'axios'


const deleteSong = (id, songDeletedCallback, errCallback) => {
    console.log('delete', id)
    axios.delete(`http://localhost:4001/api/songs/${id}`)
        .then(() => songDeletedCallback(id))
        .catch(errCallback)
}

const songCard = (props) => {
    console.log('props', props)
    const songtitle = props.song_title
    const albumcover = props.song_pic
    const songurl = props.song_url
    const songid = props.id
    const songDeletedCallback = props.songDeletedCallback

    return (
             <div className='songcard-content'>
                 <p 
                 className='songcard-label-box'
                 name='songtitle'
                 value={songtitle}
                 />
                 <img 
                 className='songcard-image-box'
                 name='albumcover'
                 src={albumcover}
                 value={albumcover}
                 />
                 
                 <button className='go-to-btn'  onClick={() => {window.open(songurl)}}>Go To</button>
                <button className="delete-btn"  onClick={() => {deleteSong(songid, songDeletedCallback)} }>Delete</button>
                
             </div>

    )
}
 export default songCard