const allSongs = (req) => {
    const db = req.app.get("db");
    return db.all_songs();
}

module.exports = {
    getSongs: async (req, res) => {
        const songs = await allSongs(req)
        res.status(200).send(songs)
    },
    createSong: (req,res) => {
        console.log('body', req.body)
        const {songtitle, albumcover, songurl, author} = req.body
        
        const db = req.app.get("db");
        db.add_song(1, songtitle, songurl, albumcover)
        //todo author id cannot be 1 needs to be passed in from front end 
        res.status(200).send(allSongs(req))
        
    },
    deleteSong: (req, res) => {
        console.log('delete', req.params)
        let {id} = req.params
        
        const db = req.app.get("db");
        db.delete_song(id)
        res.status(200).send(allSongs(req))
    }
    
}