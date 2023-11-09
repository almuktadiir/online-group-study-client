import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const SubmitMarks = () => {
    const submitMarkData = useLoaderData();
    const {id} = useParams();
    const pendingData = submitMarkData.find(pending => pending._id === id);
    const {_id, examineeName, marks, note, pdf, status, submittedUserEmail, title} = pendingData;
    

    const handleMarkSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const pdf = form.get('pdf');
        const note = form.get('note');
        const getMarks = form.get('marks');
        const feedback = form.get('feedback');
        const examineeName = pendingData.examineeName;
        const totalMarks = marks;
        const submittedUserEmail = pendingData.submittedUserEmail;
        const title = pendingData.title;
        const markPublish = {pdf, note, getMarks, feedback, examineeName, totalMarks, submittedUserEmail, title, status: 'complete'};
        console.log(markPublish);

        fetch(`http://localhost:5000/submitAssignment/${_id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(markPublish)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                Swal.fire({
                    title: 'Mark as Done',
                    text: 'Assignment status is completed',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                
            }
            console.log(data);
            e.target.reset()
        })
    }

    return (
        <div className='max-w-3xl mx-auto my-14'>
            <form onSubmit={handleMarkSubmit}>
            <div className="flex flex-col gap-6 mb-3">
                    <input type="text" name="pdf" placeholder="pdf link" className="input input-bordered input-warning w-full" defaultValue={pdf} required />
                    <textarea name="note"  id="" cols="30" rows="40" className="input input-bordered input-warning w-full" placeholder="note" defaultValue={note} required></textarea>

                    <input type="number" name="marks" placeholder="Marks" className="input input-bordered input-warning w-full"  required />
                    <textarea name="feedback"  id="" cols="30" rows="40" className="input input-bordered input-warning w-full" placeholder="feedback" required></textarea>
                    <input type="submit" value="Mark Submit" className="w-1/4 text-center btn btn-warning btn-outline mx-auto text-lg" />
                </div>
            </form>
        </div>
    );
};

export default SubmitMarks;

SubmitMarks.propTypes = {
    sData: PropTypes.object
}