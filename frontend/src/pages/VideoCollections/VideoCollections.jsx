import React from 'react'
import './VideoCollections.css';
import { assets } from '../../assets/assets';

const displayVideoCollections=[
  assets.react_video,
  assets.javascript_video,
  assets.nodejs_video,
  assets.react_video,
  assets.react_video,
  assets.react_video,
  assets.portal_video
]

const VideoCollections = () => {
  return (
    <div className='lectureVideoCollections'>
      <div className="lectureVideoContainer">
        {displayVideoCollections.map((src, index) => (
          <div className="eachLectureVideo" key={index}>
            <iframe
              src={src}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoCollections;