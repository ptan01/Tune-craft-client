import React, { useContext } from 'react';
import useBaseaxios from '../../hooks/useBaseaxios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useSelectClass from '../../hooks/useSelectClass';

const ClassesCard = ({classes}) => {

    const [axiosInstance] = useBaseaxios()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [, refetch] = useSelectClass()
    
    const handleSelect = (classInfo)=>{

        if(!user){
            Swal.fire({
                title: 'Please Login',
                text: "you need to login before select class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
              })
            return
        }

        const {img, className, price, seats, _id,instructorEmail} = classInfo
        const selectedClass = {
            img, 
            className,
            price: parseFloat(price),
            seats: parseFloat(seats),
            classId: _id ,
            studentEmail: user?.email,
            instructorEmail
        }
        axiosInstance.post('/selects', selectedClass )
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'class added successfully',
                    showConfirmButton: false,
                    timer: 1000
                  })
                refetch()
            }
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