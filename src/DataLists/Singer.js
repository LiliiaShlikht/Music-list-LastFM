import {connect} from 'react-redux';
import {useEffect} from 'react';
import {getArtistInfo} from '../redux/rootReducer';
import './Singer.css';

function Singer(props) {
    useEffect( () => {
        props.getArtistInfo(props.match.params.singerName);
    })

    if (props.artist && props.artist.image) {
        return (
            <div className="singerBlock">
                <h1>{props.artist.name}</h1>
                <img src={props.artist.image[3]['#text']} alt='' />
                <div>
                    <strong>Tags: </strong>&nbsp;
                    {props.artist.tags.tag.map((tag, index) => {
                        return (<b key={index}>
                            <a href={tag.url}>{tag.name}</a>
                            <span>&nbsp;</span>
                        </b>)
                    })}
                </div>
                <div className="infoSinger">{props.artist.bio.content}</div>
            </div>
        );
    } else {
        return '';
    }
}

function mapStateToProps (state) {
    return {
        artist: state.artist,
        tracks: state.tracks
    }
}
function  mapDispatchToProps (dispatch) {
    return {
        getArtistInfo: (artist) => dispatch(getArtistInfo(artist))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps) (Singer);