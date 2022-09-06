import React from 'react';
import Home from '../pages/Home';
import BuyCar from '../pages/BuyCar';
import Finance from '../pages/Finance';
import FindCar from '../pages/FindCar';
import SellCar from '../pages/SellCar';
import NotFound from '../pages/NotFound';
import { Route, Routes} from 'react-router-dom';
import LogInController from '../pages/LogInController';
import Register from '../components/Register/Register';


const Routers = () => {
  return (

    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/findCar' element={<FindCar />} />
     <Route path='/buyCar' element={<BuyCar />} />
     <Route path='/sellCar' element={<SellCar />}/>
     <Route path='/logincontroller' element={<LogInController/>} />   
     <Route path= '/register' element={<Register />}/>
     <Route path='/finance' element={<Finance />} />
     <Route path='/notFound' element={<NotFound />} />

     </Routes>

  );
}  

export default Routers
