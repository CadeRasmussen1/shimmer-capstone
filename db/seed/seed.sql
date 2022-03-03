CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT
);

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    author INTEGER REFERENCES users(id),
    song_title TEXT,
    song_url TEXT,
    song_pic TEXT
);