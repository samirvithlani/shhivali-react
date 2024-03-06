import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Error404 } from './components/Error404';
import { Netflix } from './components/Netflix/Netflix';
import { NetflixShows } from './components/Netflix/NetflixShows';
import { NetflxMovies } from './components/Netflix/NetflxMovies';
import { MovieDetail } from './components/Netflix/MovieDetail';
import { FormHandling1 } from './components/forms/FormHandling1';
import { FormHandling2 } from './components/forms/FormHandling2';
import { UseEffectDemo } from './components/UseEffectDemo';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { ApiDemo2 } from './components/api/ApiDemo2';
import { UserUpdate } from './components/api/UserUpdate';
import { ProductComponent } from './components/ProductComponent';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path ="/" element = {<Dashboard/>}></Route>
      <Route path ="/home" element={<Home/>}></Route>
      <Route path = "/netflix" element = {<Netflix/>}></Route>
      <Route path ="/netflix/shows" element = {<NetflixShows/>}></Route>
      <Route path = "/netflix/movies" element = {<NetflxMovies/>}></Route>
      <Route path = "/netflix/movies/detail/:id" element = {<MovieDetail/>}></Route>
      <Route path = "/form1" element = {<FormHandling2/>}></Route>
      <Route path = "/useeffect" element = {<UseEffectDemo/>}></Route>
      <Route path = "/apidemo1" element = {<ApiDemo1/>}></Route>
      <Route path = "/apidemo2" element = {<ApiDemo2/>}></Route>
      <Route path ="/userupdate/:id" element = {<UserUpdate/>}></Route>
      <Route path = "/*" element = {<Error404/>}></Route>
      <Route path = "/products" element = {<ProductComponent/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
