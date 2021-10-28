import './App.css';
import {BrowserRouter as Router , Route , Link , Switch } from "react-router-dom";
import Editmovies from './editmovies';
import Addmovies from './addmovies';

function App() {
  return (
    <div>
     <Router>
       <Link exact to="/m">EditMovie</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Link exact to="/n">Add New Movie</Link>

       <Switch>
         <Route exact path='/m' component={Editmovies}/>
         <Route exact path='/n' component={Addmovies}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
