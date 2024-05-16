const musicData = [
    { name: 'Flavio', code: 'Gazzelle', image: "https://kisskiss.it/wp-content/uploads/2023/05/gazzelle-dentro-album-cover-3000x3000-1-1024x1024.jpeg" },
    { name: 'Domani Smetto', code: 'Articolo 31', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllMvrTQBamXGelNqfA9RBCYHfuX5cmbkP00OLeA8WlA&s" },
    { name: 'Exuvia', code: 'Caparezza', image: "https://m.media-amazon.com/images/I/612wYsSygbL._UF1000,1000_QL80_.jpg"},
];

export const MusicService = {
    getMusic: () => Promise.resolve(musicData)
};
