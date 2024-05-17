let musicData = [];

export const MusicService = {
    getMusic: () => Promise.resolve(musicData),
    setMusicData: (newData) => {
        musicData = newData;
    }
};