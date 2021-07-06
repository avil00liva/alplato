import './App.css';
// eslint-disable-next-line no-unused-vars
import {HashRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import Home from './pages';
import AddProducts from './components/addProducts/AddProducts';
import { ProductsContextProvider } from './global/ProductsContext';
import Sign from './components/sign/Sign';
import Agenda from './components/agenda/agenda';
import FoodMenu from './components/foodMenu/foodMenu';
import LeerConsultas from './components/btnform/LeerConsultas';
import {AuthContextProvider, useAuthState} from "./config/config"
import Mapres from './components/maps/mapres';

// eslint-disable-next-line no-unused-vars
const AuthenticatedRoute=({component: C,...props})=>{
  const {isAuthenticated}=useAuthState()
  return(
    <Route
      {...props}
      render={routeProps=>
        isAuthenticated ? <C {...routeProps}/> : <Redirect to="/sign" />
      }
      />
  )
}
// eslint-disable-next-line no-unused-vars
const UnauthenticatedRoute=({component: C, ...props})=>{
  const {isAuthenticated}=useAuthState()
  return (
    <Route
      {...props}
      render={routeProps=>
      !isAuthenticated ? <C {...routeProps}/>:<Redirect to="/"/>}
    />
  )
}

function App() {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/addproducts" component={AddProducts}/>
                <Route path="/sign" component={Sign}/>
                <Route path="/consultas" component={LeerConsultas}/>
                <Route path="/agenda" component={Agenda}/>
                <Route path="/foodmenu" component={FoodMenu}/>
                <Route path="/mapres" component={Mapres}/>
            </Switch>
          </Router>
        </AuthContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
