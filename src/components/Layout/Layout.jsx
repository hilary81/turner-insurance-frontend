import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import SocialBar from '../Footer/SocialBar';


const Layout = () => {
  return (
    <Fragment>
       
      <Header/>
        <>
         <Routers />
         </>
     <Footer />
     <SocialBar />
    </Fragment>
  )
}

export default Layout
