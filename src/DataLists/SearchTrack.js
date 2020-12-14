import {connect} from 'react-redux';
import {searchTrack} from '../redux/rootReducer';
import './SearchTrack.css';

function SearchTrack(props) {
    let inputValue = '';

    function  getInputValue (event) {
        inputValue = event.target.value;
    }

    function toSearch() {
        props.searchTrack(inputValue);   
    }

    function renderSearchResult() {
      if(props.song && props.song.length) {
          return props.song.map((item, index) => {
              return (
                  <li key={index} className="song">
                    {item.name} - {item.artist}
                  </li>
              )
          })
      } else {
          return (
              <p>No songs found</p>
          )
      }
    }

    return (
        <div className="searchBlock">
            <h2>Search track</h2>
            <div><input onChange={getInputValue}></input>
            <button onClick={toSearch}>Search</button></div>
            <ul>{renderSearchResult()}</ul>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        song: state.song
    }
}
function  mapDispatchToProps (dispatch) {
    return {
        searchTrack: (songName) => dispatch(searchTrack(songName))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchTrack);

