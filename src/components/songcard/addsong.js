import React, {useEffect, useState} from 'react'
import axios from 'axios'


const addsong = (song, songAddedCallback, errCallback) => {
    console.log('addsong', song)
    axios.
        post('http://localhost:4001/api/songs', song)
        .then(songAddedCallback)
        .catch(errCallback)
}

const AddSongForm = (props) => {
    const songAddedCallback = props.songAddedCallback
    const [song, setSong] = useState({
        songtitle: '',
        albumcover: '',
        songurl: ''
    })

    console.log('song', song)
    return (
             <form className='addsong-content'>
                 <input
                 className='songcard-input-box'
                 placeholder='Song title'
                 type='text'
                 name='songtitle'
                 value={song.songtitle}
                 onInput={(event) => setSong({...song, songtitle: event.target.value})}

                 />
                 <input
                 className='songcard-input-box'
                 placeholder='Album cover'
                 type='text'
                 name='albumcover'
                 value={song.albumcover}
                 onInput={(event) => setSong({...song, albumcover: event.target.value})}
                 />
                 <input
                 className='songcard-input-box'
                 placeholder='Song url'
                 type='text'
                 name='songurl'
                 value={song.songurl}
                 onInput={(event) => setSong({...song, songurl: event.target.value})}
                 />
                
                    <button className='addsong-btn' onClick={() => addsong(song, songAddedCallback)}>add new song</button>
             </form>

    )
}
export default AddSongForm