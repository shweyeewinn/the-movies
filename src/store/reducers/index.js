import { combineReducers } from 'redux';
import movieDetail from './movieDetailReducer';
import movieResult from './searchMovieReducer';
import movieNowPlaying from './moviesNowPlayingReducer';

export default combineReducers({
  movieDetail,
  movieResult,
  movieNowPlaying
});
