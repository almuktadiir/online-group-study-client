import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const FeatureCard = ({ feature }) => {
    const { title, description, image_url } = feature;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={'/allAssignments'}><button className="btn bg-green-300">Join Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;

FeatureCard.propTypes = {
    feature: PropTypes.object
}