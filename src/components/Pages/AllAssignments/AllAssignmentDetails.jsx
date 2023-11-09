import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AllAssignmentDetails = () => {
    const {user} = useContext(AuthContext);
    const viewLoadData = useLoaderData();
    const { id } = useParams();

    const findSingleData = viewLoadData.find(viewData => viewData._id === id);
    const { image, title, marks, difficulty } = findSingleData;

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const pdf = form.get('pdf');
        const note = form.get('note');
        const status = 'pending';
        const submittedUserEmail = user?.email;
        const examineeName = user?.displayName;
        const pendingAssignment = {pdf, note, status, submittedUserEmail, title, marks, examineeName};
        console.log(pendingAssignment);

        fetch('http://localhost:5000/submitAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pendingAssignment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Submitted Successfully',
                    icon: 'success',
                    confirmButtonText: 'cool'
                })
            }
            console.log(data);
            e.target.reset();
        })
    }



    return (
        <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto my-12">
            <figure className="px-10 pt-10">
                <img src={image} alt="assignment" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Difficulty Level: {difficulty}</p>
                <p>Marks: {marks}</p>
                <div className="card-actions">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-green-300" onClick={() => document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">

                            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <input type="text" name="pdf" placeholder="PDF Link" className="input input-bordered input-warning" required/>
                            <textarea name="note" id="" cols="30" rows="20" className="input input-bordered input-warning" placeholder="Quick Note" required></textarea>
                            <input type="submit" value="Submit Assignment" className="w-2/4 text-center btn btn-warning btn-outline mx-auto text-lg" />
                            </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                </div>
                
            </div>
        </div>
    );
};

export default AllAssignmentDetails;