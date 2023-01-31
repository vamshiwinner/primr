import './index.css'

const MovieItem = props => {
  const {moviesList} = props
  return moviesList.map(eachItem => (
    <li className="list">
      <img
        className="movie-imge"
        src={eachItem.thumbnailUrl}
        alt="thumbnailurl"
      />
    </li>
  ))
}
export default MovieItem
