const videoA = {
  id: 'a',
  title: 'Video A',
  duration: 100,
  released: true
};
const videoB = {
  id: 'b',
  title: 'Video B',
  duration: 200,
  released: false
}
const videos = [videoA, videoB];

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  resolve(video);
})

const getVideos = () => new Promise((resolve) => resolve(videos));

const createVideo = ({ title, duration, released }) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration, 
    released
  };

  videos.push(video);
}

exports.createVideo = createVideo;
exports.getVideos = getVideos;
exports.getVideoById = getVideoById;