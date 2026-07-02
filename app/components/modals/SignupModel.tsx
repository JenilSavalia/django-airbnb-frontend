'use client'

import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import Modal from "./modals";

const SignupModal = () => {

    const signupModal = useSignupModal();

    const content = (
        <>
            <div className=" ">
                <p className="text-sm text-center text-gray-500">Welcome back! Please enter your details.</p>
                <form action="" className="">
                    <input type="text" placeholder="Email" className="m-2 border border-gray-300 rounded-md p-2 w-full" />
                    <input type="password" placeholder="Password" className="m-2 border border-gray-300 rounded-md p-2 w-full" />
                    <input type="password" placeholder="Confirm Password" className="m-2 border border-gray-300 rounded-md p-2 w-full" />

                    <CustomButton
                        label={"Signup"}
                        onClick={() => {
                            signupModal.close();
                        }}

                    />

                </form>
            </div>


        </>


    )

    return (
        <>
            <Modal
                label={"Signup"}
                close={signupModal.close}
                content={content}
                isOpen={signupModal.isOpen}
            />
        </>
    )

}

export default SignupModal