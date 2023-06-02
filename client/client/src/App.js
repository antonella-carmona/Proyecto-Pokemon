import {Route , BrowserRouter} from "react-router-dom"
// import './App.css';
import Home from "./viewsComponentes/home/home"
import Details from './viewsComponentes/details/details';
import Create from "./viewsComponentes/create/create"
//Switch y exact es para que no se pisen las rutas
function App() {
  return (
    <BrowserRouter>
    <div >
      
     
      <Route exact path="/home" component={Home}/>
      <Route path="/home/:id" component={Details}/>
      <Route path="/create" component={Create}/>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
