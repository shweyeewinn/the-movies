import { combineReducers } from 'redux';
import movieDetail from './movieDetailReducer';
import movieResult from './searchMovieReducer';

export default combineReducers({
  movieDetail,
  movieResult
});
