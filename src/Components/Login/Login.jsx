import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthProvider } from "../AuthContributor/AuthContributor";


const Login = () => {
    const { signInUser, signInWithGoogle, signInFacebook } = useContext(AuthProvider)
    const registerNavi = useNavigate()


    const [signError, setSignError] = useState();
    const [signSuccess, setSignSuccess] = useState();




    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSignError(" ");
        setSignSuccess(" ");

        if (password.length < 6) {
            setSignError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setSignError('you should a special character')


        signInUser(email, password)
            .then(result => {
                console.log(result);
                setSignSuccess("User Created successfully!")
                e.target.reset()
                registerNavi('/');
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })
            .catch(error => {
                console.error(error);
                setSignError(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Sign In Failed",
                    text: "An error occurred during sign in. Please try again.",
                });

            })
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                registerNavi('/');
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })

            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Sign In Failed",
                    text: "An error occurred during sign in. Please try again.",
                })


            })
    }

    const handleFacebook = () => {
        signInFacebook()
            .then(result => {
                console.log(result.user);
                registerNavi('/')
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Sign In Failed",
                    text: "An error occurred during sign in. Please try again.",
                })


            })
    }



    return (
        <div>

            <div className="bg-[#CB6161] dark:bg-gray-700 my-10 rounded-xl lg:h-[700px] py-28 lg:w-[600px] mx-auto px-28">

                <form className="dark:text-white" onSubmit={handleLogin}>

                    <div>
                        <p className="lg:text-3xl text-xl dark:text-white font-semibold text-black mb-3">Email</p>
                        <input type="email" name="email" placeholder="Enter your email" className="border lg:p-3 p-2 lg:w-[400px] w-[250px]" />
                    </div>

                    <div>
                        <p className="lg:text-3xl text-xl dark:text-white font-semibold text-black mb-3">Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="border lg:p-3 p-2  w-[250px] lg:w-[400px]" />
                        <label className="label">
                            <a href="#" className="label-text-alt link dark:text-white link-hover lg:text-xl font-semibold text-black">Forgot password?</a>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-[#992833] text-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">Sign In</button>
                    </div>
                    <div className="lg:text-xl text-sm mt-3 dark:text-white  font-semibold text-black">
                        <p>
                            Dont have an account? Please <Link to='/register' className="hover:underline ">Register</Link>
 
                        </p>
                    </div>
                    <p className="text-center lg:text-xl text-sm">OR</p>
                    <div className="mt-4 gap-10">
                        <button onClick={handleGoogle} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-[#992833] text-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                            </svg>
                            Sign in with Google
                        </button>
                        <br /> <br />
                        <button onClick={handleFacebook} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-[#992833] text-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" fill="currentColor" className="bi bi-facebook w-4 h-auto " viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" id="mainIconPathAttribute" fill="blue"></path> </svg>
                            Sign in with Facebook
                        </button>


                        {/* <button onClick={handleFacebook} className="btn-sm rounded-lg bg-[#992833] text-white"><i className="fa-brands fa-facebook"></i></button> */}
                    </div>

                </form>

                {
                    signError && <p className="mx-8 text-red-600">{signError}</p>
                }
                {
                    signSuccess && <p className="mx-8 text-green-600">{signSuccess}</p>
                }


            </div>

        </div>
    );
};

export default Login;