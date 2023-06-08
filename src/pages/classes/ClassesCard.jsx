import React from 'react';

const ClassesCard = ({classes}) => {

    



    return (
        <div className={`${classes.seats < 1 ? " bg-red-600" : " "} card card-side bg-base-100 shadow-xl`}>
            <figure><img className='w-[400px] h-[300px]' src={classes.img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classes.className}</h2>
                <p>Instructor name: {classes.instructorName}</p>
                <p>Available seats: {classes.seats}</p>
                <p>Price: ${classes.price}</p>
                <div className="card-actions justify-end">
                    <button disabled={classes.seats < 1 } className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;