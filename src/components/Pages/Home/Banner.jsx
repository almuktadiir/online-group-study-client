import { Link } from 'react-router-dom';
import bg from '../../../assets/b2.jpg'

const Banner = () => {
    return (
        <div className="hero h-[35rem]" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl text-white">
                    <h1 className="mb-5 text-5xl font-bold">Join Our Collaborative Online Study Sessions</h1>
                    <p className="mb-5">Welcome to a dynamic online learning community dedicated to fostering collaborative study sessions. Connect with like-minded individuals, engage in interactive study groups, and enhance your learning experience. Explore diverse subjects, share knowledge, and boost your understanding through collective study efforts. Join us today and embark on a journey of shared learning and academic growth!</p>
                    <Link to={'/allAssignments'}><button className="btn bg-green-300">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;