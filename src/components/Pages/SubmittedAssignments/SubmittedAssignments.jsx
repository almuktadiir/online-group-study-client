import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentDetails from "./SubmittedAssignmentDetails";


const SubmittedAssignments = () => {
    const submittedData = useLoaderData();
    console.log(submittedData);


    return (
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto my-12">
                {
                    submittedData.map(sData => <SubmittedAssignmentDetails 
                    key={sData._id}
                    sData={sData}
                    ></SubmittedAssignmentDetails>)
                }
        </div>
    );
};

export default SubmittedAssignments;