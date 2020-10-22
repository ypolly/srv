import ApplyForm from '../components/ApplyForm';
import Head from 'next/head';
import { useRef } from 'react';
import Borders from '../components/Borders';

export default function Apply({ animationClass, closeCard }) {


    return (
        <>
            {/* <div className="white"> </div> */}

            <div id="sr__apply" className={`form__border  h-form ${animationClass}`} style={{ opacity: 1 }} >


                {/* <div className="form__border-1 " style={{ borderColor: 'white' }}> */}
                {/* <div className="form__border-2" style={{ borderColor: 'white' }}> */}
                <Borders color="white">

                    {/* <div style={{opacity:0.6 }}>
                <object style={{ position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 18}} type="image/svg+xml"
                        data="./images/formLayout.svg"/>

        </div>  */}

                    <div onClick={closeCard} className="form__close">

                        <object className="form__close-svg" type="image/svg+xml"
                            data="./images/cross.svg"></object>

                    </div>


                    <div >

                            <object className="form__header-title" type="image/svg+xml"
                                data="./images/servia-w.svg"></object>


                            <object className="form__header-logo" type="image/svg+xml"
                                data="./images/best-paid.svg"></object>


                            <div className="form__text-header">
                                BASIC APPLICATION
                                   </div>

                            <div className="form__text-content">
                                <p>
                                    Thank you for your interest in working at <span className="marker">
                                        Servia® AB! </span>Here you find our basic 
                                        application for work as a <span className="marker"> Servia® Home 
                                        Cleaning Maid. </span></p>
                                           <p>It takes <span className="marker"> less than three minutes </span>to 
                                           complete. We read and respond to  all 
                                           applications we receive.<span className="marker"> Always.</span>
                                            </p>
                            </div>
                            <div className="form__content">
                                <ApplyForm closeCard={closeCard} />
                            </div>

                       <div className="copyright">© COPYRIGHT SERVIA AB 2020.<br/> 
                        SERVIA™ AND THE BEST PAID MAID.™<br/> 
                        ARE TRADEMARKS WITH PENDING REGISTRATIONS.</div>
                    </div>
                    </Borders>
                        </div>
                 

        {/* </div> */}

                  
                {/* </div> */ }
       





        </>
    )
}