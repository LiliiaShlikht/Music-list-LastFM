import {connect} from 'react-redux';
import {getTopTracks} from '../redux/rootReducer';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import './PopularSongs.css';

function PopularSongs(props) {
    useEffect( () => {
        props.getTopTracks();
    })
    
    return (
        <div className="mainBlock">
            <h1>List of popular songs</h1>
            <button><Link to="/SearchTrack">Search track</Link></button>
            <ul className="list">
                {props.tracks.map((track, index) => {
                    return (
                        <li key={index}>
                            <div><img src={track.image[0]['#text']} alt=''/></div>
                            <div className="info">
                            <strong>{track.name}</strong><br /> 
                            <Link to={`/Singer/${track.artist.name}`}>{track.artist.name}</Link> - <a href={track.artist.url}>Learn more at Last.fm</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    
}

function mapStateToProps (state) {
    return {
        tracks: state.tracks,
        artist: state.artist
    }
}
function  mapDispatchToProps (dispatch) {
    return {
        getTopTracks: () => dispatch(getTopTracks())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps) (PopularSongs);