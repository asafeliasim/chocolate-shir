import React from 'react';
import singleCocao from '../../asserts/images/open-cocao.jpeg';
import singleClassic from '../../asserts/images/open-classic.jpeg';
import vanilCocao from '../../asserts/images/open-vanil-coacao.jpeg';
import package1 from '../../asserts/images/package-1.jpeg';
import package2 from '../../asserts/images/package-2.jpeg';
import package3 from '../../asserts/images/package-3.jpeg';
import butters from '../../asserts/images/peanut-butter.jpeg';
import bagCocao from '../../asserts/images/cocoa-cookie-2.jpeg';
import header from '../../asserts/images/‏‏headerBG.PNG';
const CookieGalleryList = () => {
    return (
        <div className="container">

                    <div className="row">
                        <figure className="col-md-4">

                            <img alt="picture"
                                 src={singleCocao}
                                 className="img-fluid"
                            />

                        </figure>

                        <figure className="col-md-4">

                            <img alt="picture"
                                 src={singleClassic}
                                 className="img-fluid"
                            />
                        </figure>

                        <figure className="col-md-4">
                            <img alt="picture"
                                 src={vanilCocao}
                                 className="img-fluid"
                            />
                        </figure>

                    </div>
                    <div className="row">
                        <figure className="col-md-4">
                            <img alt="picture"
                                 src={package1}
                                 className="img-fluid"
                            />
                        </figure>

                        <figure className="col-md-4">
                            <img alt="picture"
                                 src={package2}
                                 className="img-fluid"
                            />
                        </figure>

                        <figure className="col-md-4">
                            <img alt="picture"
                                 src={package3}
                                 className="img-fluid"
                            />
                        </figure>

                    </div>
                    <div className="row">
                        <figure className="col-md-4">
                            <img alt="picture"
                                 src={butters}
                                 className="img-fluid"
                            />
                        </figure>

                        <figure className="col-md-4">
                            <img alt="picture"
                                 src={bagCocao}
                                 className="img-fluid"
                            />
                        </figure>

                        <figure className="col-md-4">

                            <img alt="picture"
                                 src={header}
                                 className="img-fluid"
                            />

                        </figure>

                    </div>

            </div>
    )
};

export default CookieGalleryList;
