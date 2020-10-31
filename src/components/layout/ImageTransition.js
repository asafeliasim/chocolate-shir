import React from 'react';
import product2 from '../../asserts/images/product-2.PNG';

const bg = {
    backgroundImage: `linear-gradient(to right,rgba(201, 230, 247, 0.8),rgba(233, 245, 251, 0.8)),url(${product2})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
}


const ImageTransition = () => {
    return (
        <div className="transition" style={bg}>

        </div>
    );
};

export default ImageTransition;
