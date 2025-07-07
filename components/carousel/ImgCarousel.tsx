import React from 'react';
import Socis from './Socis';


type SetType = 'socis' | 'assets' | 'networks';

type Props = {
  set: SetType;
};

const ImgCarousel: React.FC<Props> = ({ set }) => {


  return (
    <div>
      
      <Socis />

    </div>

  );
}

export default ImgCarousel; 


