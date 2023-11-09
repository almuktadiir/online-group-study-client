import { useContext } from "react";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";


const Register = () => {
    const {createUser, handleUpdateProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photo);


        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            handleUpdateProfile(name, photo)
            .then(res =>{
                const user = res.user;
                console.log(user);
            })
            navigate(location?.state ? location?.state : '/')
        })
        .catch(err => {
            console.log(err.message);
        })

    }

    return (
        <div className="w-full mx-auto max-w-md p-4 rounded-md shadow-xl sm:p-8 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
            <p className="text-sm text-center dark:text-gray-400">Dont have account?
                <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
            </p>
            <div className="my-6 space-y-4">
                <button aria-label="Login with Google" type="submit" className="flex items-center justify-center w-full border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
                    <GoogleLogin></GoogleLogin>
                    {/* <p>Login with Google</p> */}
                </button>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <form onSubmit={handleRegister} className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm">photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="text-center">
                        <p>Already have an account? <Link to={`/login`} className="font-bold">Login</Link> </p>
                    </div>
                </div>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 shadow-md">Sign up</button>
            </form>
        </div>
    );
};

export default Register;