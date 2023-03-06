import React from 'react';
import S4AB2 from './s4ab2';
import S4AB from './s4ab';
import S4AD7 from './s4ad7';
const Curating = () =>{
  return (
    <div className="main">
      <p>Past curatorial and organizing projects. Click for more info.</p>
      <div className='content'>
        <S4AB2></S4AB2>
        <S4AB></S4AB>
        <S4AD7></S4AD7>
      </div>
    </div>
  );
}
export default Curating;
