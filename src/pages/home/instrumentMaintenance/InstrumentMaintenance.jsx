import React from 'react';
import { Fade, Flip, Hinge, Slide } from "react-awesome-reveal";
import './InstrumentMaintenance.css'

const InstrumentMaintenance = () => {
    return (
        <div className='bg-blue-300 clip-path min-h-[60vh]  my-20 flex flex-col justify-center'>
            <div className='my-10'>
                <div className='text-center my-10'>
                    <h1 className='text-3xl font-bold'> Instrument Care and<span className='text-red-600'>Maintenance</span></h1>
                    <p>There is Some information about cleaning, storage, and common issues musicians may face</p>
                </div>
                <div className='lg:flex'>
                    <div className='lg:w-1/2'>
                        <Fade duration={3000}>
                            <div>
                                <img className='rounded-lg' src="https://www.yamaha.com/en/musical_instrument_guide/common/images/acoustic_guitar/maintenance_main.jpg" alt="" />
                            </div>
                        </Fade>
                    </div>
                    <div className='lg:w-1/2 p-5'>
                        <Fade duration={4000}>
                            <div>
                                <h1 className='font-semibold'>We are teaching here how to care instrument and maintenance</h1>
                                <p>At Tune Craft, we understand the importance of proper care and maintenance for your musical instruments. Regular maintenance not only prolongs the lifespan of your instruments but also ensures optimal performance and sound quality. In this section, we provide you with essential tips and guidelines for maintaining and caring for your instruments.</p>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InstrumentMaintenance;