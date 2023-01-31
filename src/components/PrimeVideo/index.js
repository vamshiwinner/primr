import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="prime-video">
      <img
        className="prime-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <MoviesSlider moviesList={moviesList} />
    </div>
  )
}
export default PrimeVideo
