import FeatureCard from "./FeatureCard";
import PropTypes from 'prop-types'


const Features = ({featureData}) => {

    return (
        <div className="max-w-7xl mx-auto my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                featureData.map(feature => <FeatureCard 
                    key={feature._id}
                    feature={feature}
                ></FeatureCard>)
            }
            </div>
        </div>
    );
};

export default Features;

Features.propTypes = {
    featureData: PropTypes.array
}