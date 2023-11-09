import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllAssignmentCard = ({ usersAssignment }) => {
    const { _id, title, image, marks, difficulty } = usersAssignment;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} className="h-60 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between gap-6'>
                    <h2 className="card-title">{title}</h2>
                </div>
                <p>Assignment Marks - {marks}</p>
                <p>Level - {difficulty}</p>
                <div className="card-actions justify-center">
                    <div className="btn-group">
                        <Link to={`/allAssignmentsDetail/${_id}`}><button className="btn bg-[#0200d6] text-white">View Assignment</button></Link>
                        <Link to={`/allAssignmentsUpdate/${_id}`}><button className="btn bg-[#060061] text-white">Update Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAssignmentCard;

AllAssignmentCard.propTypes = {
    usersAssignment: PropTypes.object
}