const videoData = [
    { name: 'Se domani non torno distruggi tutto', code: 'Flavio e Sofia', image: "https://img.youtube.com/vi/5mBFvgPcgzQ/mqdefault.jpg" },
    { name: 'Il caso del piccione spia arrestato', code: 'BarbascuraX', image: "https://img.youtube.com/vi/2YuSsGPxA0w/mqdefault.jpg"},
    { name: 'La caduta della fetta di pane', code: 'Viral Lab', image: "https://img.youtube.com/vi/6zSUdmxdGjY/mqdefault.jpg"},
];

export const VideoService = {
    getVideo: () => Promise.resolve(videoData)
};
