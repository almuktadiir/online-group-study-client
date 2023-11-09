import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";
import img from '../../../assets/no_data.jpg'


const MyAssignments = () => {
    const myAssignData = useLoaderData();
    const { user } = useContext(AuthContext);
    const filterData = myAssignData.filter(myData => myData.submittedUserEmail === user?.email);
    const [currentUserData, setCurrentUserData] = useState(filterData);

    return (
        <div>
            {
                currentUserData?.email ?

                    <div className="max-w-7xl mx-auto my-14 grid grid-cols-3 gap-6">
                    {
                        currentUserData.map(currentUsers => <MyAssignmentCard
                            key={currentUsers._id}
                            currentUsers={currentUsers}
                            currentUserData={currentUserData}
                            setCurrentUserData={setCurrentUserData}
                        ></MyAssignmentCard>)
                    }
                    </div>
                    :
                    <div className="text-center mx-auto max-w-xl my-10">
                        <p className="text-3xl font-medium my-10">You have not created any assignment</p>
                        <img src={img} className="shadow-xl rounded-full" alt="" />
                    </div>
            }
        </div>
    );
};

export default MyAssignments;