import React from 'react';
import ProfilPhoto from './profile/ProfilPhoto.js';
import FullName from './profile/FullName';
import Adress from './profile/Adress';
import './style.css'

function Main() {
    return (
      <div className="container">
  <ProfilPhoto/>
  <FullName/>
  <Adress/>
    </div>
    
    );
  }
  
  export default Main;