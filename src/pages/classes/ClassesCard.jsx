import React from 'react';
import useBaseaxios from '../../hooks/useBaseaxios';

const ClassesCard = ({classes}) => {

    const [axiosInstance] = useBaseaxios()
    
    const handleSelect = (classInfo)=>{
        const {img, className, price, seats, _id} = classInfo
        const selectedClass = {
            img, 
            className,
            price: parseFloat(price),
            seats: parseFloat(seats),
            classId : _id 
        }
        axiosInstance.post('/selects', selectedClass )
        .then(res => {
            console.log(res.data)
        })
        console.log(selectedClass)
    }


    return (
        <div className={`${classes.seats < 1 ? " bg-red-600" : " "} card card-side bg-base-100 shadow-xl`}>
            <figure><img className='w-[400px] h-[300px]' src={classes.img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classes.className}</h2>
                <p>Instructor name: {classes.instructorName}</p>
                <p>Available seats: {classes.seats}</p>
                <p>Price: ${classes.price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleSelect(classes)} disabled={classes.seats < 1 } className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;