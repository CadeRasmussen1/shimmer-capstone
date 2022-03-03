import React from 'react'


function SongCard(props) {
    // copy and pasted from main with div classname added
    return (
    <div className='song-card'>
        <img alt='song cover' src={song.imageURL} class="song-cover"/>
        <p class="song-title">{song.title}</p>
        <div class="btns-container">
            <button onclick="updateSong(${song.id}, 'minus')">-</button>
            <p class="song-rating">{song.rating}stars</p>
            <button onclick="updateSong(${song.id}, 'plus')">+</button>
        </div>
        <button onclick="deleteSong(${song.id})">delete</button>
        <button onclick="location.href='${song.songURL}';">go to song</button>
    </div>
    )
}