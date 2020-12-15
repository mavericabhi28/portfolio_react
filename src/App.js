import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Components/Header'


function App() {
  return (
          <div>
    <Router>
          <Header />
          <div className="cont">
             <Switch>
            <Route path= "/" exact component={Home}/>
            <Route path= "/contact" component={Contact}/>
            <Route path= "/About" component={About}/>
          </Switch>
          </div>
         
          
    </Router>
            
        </div>
  );
}

export default App;
