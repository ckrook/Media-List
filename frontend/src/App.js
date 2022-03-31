import { useEffect, useState } from "react";
import axios from "axios";

// Styling
import "./style/App.css";

// Components //
import Videos from "./components/Videos";
import Images from "./components/Images";

// Pause, Play video when outside viewport
import { useVideoAutoplay } from "./lib/useVideoAutoplay";

function App() {
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    try {
      await axios.get("http://localhost:4000/images").then((response) => {
        setImages(response.data);
      });
      await axios.get("http://localhost:4000/videos").then((response) => {
        setVideos(response.data);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  useVideoAutoplay();
  return (
    <div className="App">
      <div className="container">
        <ul>
          {loading
            ? images.map((image) => {
                return (
                  <Images
                    id={image.id}
                    title={image.title}
                    thumbnail={image.origin}
                    description={image.description}
                  />
                );
              })
            : null}
          {loading
            ? videos.map((video) => {
                return (
                  <Videos
                    id={video.id}
                    title={video.title}
                    src={video.origin}
                    description={video.description}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
