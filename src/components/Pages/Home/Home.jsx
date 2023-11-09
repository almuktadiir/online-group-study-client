import { useLoaderData } from "react-router-dom";
import Accordian from "./Accordian";
import Banner from "./Banner";
import Features from "./Features/Features";


const Home = () => {
    const featureData = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Features featureData={featureData}></Features>
            <Accordian></Accordian>
        </div>
    );
};

export default Home;