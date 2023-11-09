
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();






const SubmittedAssignmentDetails = ({ sData }) => {
    const { _id, title, marks, examineeName, pdf } = sData;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Assignment: {title}</h2>
                <p>Total Marks: {marks}</p>
                <p>Examinee Name: {examineeName}</p>


                <div className='flex justify-center'>

                
                <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-green-300 w-full" onClick={() => document.getElementById('my_modal_3').showModal()}>View PDF</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <Document file={pdf}>
                                <Page pageNumber={1}></Page>
                            </Document>
                        </div>
                    </dialog>
                </div>
                <Link to={`/submitAssignMarking/${_id}`}><button className='btn bg-green-300 w-full'>Give Mark</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default SubmittedAssignmentDetails;

SubmittedAssignmentDetails.propTypes = {
    sData: PropTypes.object
}