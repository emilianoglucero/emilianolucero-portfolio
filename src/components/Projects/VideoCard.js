import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import { Image } from "../Image/Image"

const VideoCard = ({ info }) => {
  return (
    <a
      className="transition rounded duration-250"
      href={info.href}
      rel="noreferrer"
      target="_blank"
      aria-label={`View project: ${info.title}`}
    >
      <HoverVideoPlayer
        videoSrc={info.videoSrc}
        pausedOverlay={
          <Image
            filename={info.imgSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={`Thumbnail for ${info.title}`} // Add alt text for the image
          />
        }
      />
    </a>
  )
}

export default VideoCard
