const initialState = {
    tracks: [],
    artist: { 
        tags: {
            tag: []
        }
    },
    song: []
}
export const getTopTracks = () => {
    return dispatch => {
        fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=149c5c05723a16c2f25329c9c6cf5451&format=json')
            .then(res => res.json())
            .then(res => {
                dispatch({type: 'SAVE_TRACKS', track: res.tracks.track});
            })    
    }
}

export const getArtistInfo = (artistName) => {
    return dispatch => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=149c5c05723a16c2f25329c9c6cf5451&format=json`)
            .then(res => res.json())
            .then(res => {
                dispatch({type: 'GET_ARTIST', artist: res.artist});
            });
    }
}

export const searchTrack = (songName) => {
    return dispatch => {
        fetch(`http://ws.audioscrobbler.com//2.0/?method=track.search&track=${songName}&api_key=149c5c05723a16c2f25329c9c6cf5451&format=json`)
            .then(res => res.json())
            .then(res => {
                if(!res.results || !res.results.trackmatches){
                    dispatch({type: 'SEARCH_TRACK', song: []});
                } else {
                    dispatch({type: 'SEARCH_TRACK', song: res.results.trackmatches.track});
                }

            });
    }
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'SAVE_TRACKS':
            return {
                tracks: action.track
            }
        case 'GET_ARTIST': {
            const res = Object.assign({}, state, {artist: action.artist});
            return res;
            }
        case 'SEARCH_TRACK': {
            const res = Object.assign({}, state, {song: action.song});
            return res;
        }
        default:
            return state;
        }
}