import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBaseaxios from '../../../hooks/useBaseaxios';

const UpdateClass = () => {

    const id = useParams().id;
    const [axiosInstance] = useBaseaxios()
    const [classes, setClasses] = useState({})

    useEffect(() => {
        axiosInstance(`http://localhost:5000/classes/${id}`)
            .then(res => {
                setClasses(res.data)
            })
    }, [])

    console.log(classes)

    const handleUpdate = (e) => {
        e.preventDefault()

        const name = e.target.name.value  
        const img = e.target.image.value
       const seats= e.target.seats.value
        
        const updatedClass = {
            name,
            img,
            seats: parseFloat(seats)
        }
        axiosInstance.patch(`classes/update/${id}`, updatedClass)
        .then(res => {
            console.log(res.data)
        })

    }

    return (
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Name' defaultValue={classes.className} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="img">Image</label>
                <input type="text" name='image' placeholder='Url' defaultValue={classes.img} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="img">Seats</label>
                <input type="number" name='seats' placeholder='Seats' defaultValue={classes.seats} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <input className='btn' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default UpdateClass;