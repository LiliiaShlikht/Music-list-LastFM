import {Route, Switch, Redirect} from 'react-router-dom';
import PopularSongs from './DataLists/PopularSongs';
import Singer from './DataLists/Singer';
import SearchTrack from './DataLists/SearchTrack';


function App() {
  return (
    <div >
      <Switch>
          <Route path="/SearchTrack" component={SearchTrack}></Route>
          <Route path="/Singer/:singerName" component={Singer}></Route>
          <Route path="/PopularSongs" component={PopularSongs}></Route>
          <Route exact path="/" render={() => (
            <Redirect
              to="/PopularSongs">
            </Redirect>
            )}></Route>
      </Switch>
    </div>
  );
}

export default App;