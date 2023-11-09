import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const MyAssignmentCard = ({ setCurrentUserData,currentUserData, currentUsers }) => {
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myAssignment/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
            }
            
            /// remaining user
            const remaining = currentUserData.filter(exist => exist._id !== id);
            setCurrentUserData(remaining);
        })
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Assignment Title: {currentUsers.title}</h2>
                <p>Assignment Status: {currentUsers.status}</p>
                <p>Assignment Marks : {currentUsers.marks}</p>
                <p>Obtain Marks: {currentUsers?.getMarks || 'Your paper is not marking yet'}</p>
                <p>Examiner Feedback: {currentUsers?.feedback || "After getting marks, examiner will give feedback"}</p>
                <div className="card-actions">
                    <button onClick={()=>handleDelete(currentUsers._id)} className="btn bg-green-400">Delete Your Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default MyAssignmentCard;

MyAssignmentCard.propTypes = {
    setCurrentUserData: PropTypes.func,
    currentUserData: PropTypes.array,
    currentUsers: PropTypes.object
}