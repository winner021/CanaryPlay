import { combineReducers } from "redux";
import Tokenreducer from "./Tokenreducer";
import genreReducer from "./genreReducer";
import selectedGenre from "./selectedGenre";
import trackOneReducer from "./trackOneReducer";
import trackTwoReducer from "./trackTwoReducer";
import trackFourreducer from "./trackFourreducer";
import trackFiveReducer from "./trackFiveReducer";
import trackThreeReducer from "./trackThreeReducer"
import SongClickReducer from "./SongClickReducer";
import SearchReducer from "./SearchReducer";
import likedSongReducer from "./likedSongReducer";
import RecentlyPlayedReducer from "./RecentlyPlayedReducer";
import UserDataReducer from "./UserDataReducer";
import playlistCreateReducer from "./playlistCreateReducer";
import playlistFetch from "./playlistFetch";
import artistData from "./artistData";
import playLIstTrackData from "./playLIstTrackData";
import playlistdeletetrack from "./playlistdeletetrack";
import userLikedSongs from "./userLikedSongs";
import likedSongDelete from "./likedSongDelete";

export default combineReducers({
   tokenId:Tokenreducer,
   genres:genreReducer,
   selectedGenre:selectedGenre,
   trackOneReducer:trackOneReducer,
   trackTwoReducer:trackTwoReducer,
   trackFourreducer:trackFourreducer,
   trackFiveReducer:trackFiveReducer,
   trackThreeReducer:trackThreeReducer,
   SongClickReducer:SongClickReducer,
   SearchReducer:SearchReducer,
   likedSongReducer:likedSongReducer,
   RecentlyPlayedReducer:RecentlyPlayedReducer,
   UserDataReducer:UserDataReducer,
   playlistCreateReducer:playlistCreateReducer,
   playlistFetch:playlistFetch,
   artistData:artistData,
   playLIstTrackData:playLIstTrackData,
  playlistdeletetrack:playlistdeletetrack,
  userLikedSongs:userLikedSongs,
  likedSongDelete:likedSongDelete,
})