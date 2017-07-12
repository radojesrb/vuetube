import { videos } from './index'

export function getVideos () {
  return videos.get('/videos')
}
