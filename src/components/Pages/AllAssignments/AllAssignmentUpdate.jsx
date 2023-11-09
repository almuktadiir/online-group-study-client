import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {  useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AllAssignmentUpdate = () => {
    const [dateCalender, setDateCalender] = useState(null);
    const { user } = useContext(AuthContext);
    const updateData = useLoaderData();
    const { id } = useParams();
    const findSingleData = updateData.find(singleData => singleData._id === id);
    const { _id, description, difficulty, email, image, marks, title } = findSingleData;
    


    const handleUpdateAssignment = e => {
        e.preventDefault();
        if (user?.email !== email) {
            return Swal.fire({
                title: 'sorry',
                text: 'You can update your own assignment, not others',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        } else {
            const form = new FormData(e.target);
            const title = form.get('title');
            const marks = form.get('marks');
            const image = form.get('image');
            const dueDate = form.get('duedate');
            const difficulty = form.get('difficulty');
            const description = form.get('description');
            const userEmail = user?.email;
            const updateAssignment = { title, marks, image, dueDate, difficulty, description, userEmail };
            console.log(updateAssignment);

            fetch(`http://localhost:5000/allAssignmetsUpdate/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateAssignment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'congrats',
                            text: 'Assignment updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                    console.log(data);
                })
        }
    }


    return (
        <div className="max-w-7xl mx-auto my-16 text-center bg-[#ebf6e2ff] shadow-lg p-5 rounded-lg">
            <h2 className="mb-3 font-montez font-semibold text-xl">Update Assignment</h2>
            <form onSubmit={handleUpdateAssignment}>

                <div className="flex gap-6 mb-3">
                    <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered input-warning w-1/2" defaultValue={title} required />
                    <input type="number" name="marks" placeholder="Marks" className="input input-bordered input-warning w-1/2" defaultValue={marks} required />
                </div>

                <div className="flex gap-6 mb-3">
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered input-warning w-1/2" defaultValue={image} required />
                    <DatePicker className="input input-bordered input-warning w-full" name="duedate" placeholderText="Due Date" selected={dateCalender} onChange={(date) => setDateCalender(date)} required></DatePicker>

                    <select
                        id="difficulty"
                        name="difficulty"
                        className="input input-bordered input-warning w-1/2" defaultValue={difficulty} required>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="text-center mb-3">
                    <textarea name="description" defaultValue={description} id="" cols="30" rows="40" className="input input-bordered input-warning w-1/2" placeholder="Description" required></textarea>
                </div>
                <input type="submit" value="Update Assignment" className="w-1/4 text-center btn btn-warning btn-outline mx-auto text-lg" />
            </form>
        </div>
    );
};

export default AllAssignmentUpdate;