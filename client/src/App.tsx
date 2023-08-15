import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import RestaurantDetails from './routes/RestaurantDetailsPage'
import UpdateRestaurant from './routes/UpdateRestaurantPage'
import { RestaurantsContextProvider } from './context/RestaurantsContext'
import './index.css'

function App() {

  return (
    <RestaurantsContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
          <Route path='/restaurants/:id/update' element={<UpdateRestaurant/>}/>
        </Routes>
      </Router>
    </RestaurantsContextProvider>
  );
};

export default App
