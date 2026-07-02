'use client'

import CustomButton from "../forms/CustomButton";
import Modal from "./modals";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {

    const loginModal = useLoginModal();

    const content = (
        <>
            <div className=" ">
                <p className="text-sm text-center text-gray-500">Welcome back! Please enter your details.</p>
                <form action="" className="">
                    <input type="text" placeholder="Email" className="m-2 border border-gray-300 rounded-md p-2 w-full" />
                    <input type="password" placeholder="Password" className="m-2 border border-gray-300 rounded-md p-2 w-full" />

                    <CustomButton
                        label={"Login"}
                        onClick={() => {
                            loginModal.close();
                        }}

                    />

                </form>
            </div>


        </>


    )

    return (
        <>
            <Modal
                label={"Login"}
                close={loginModal.close}
                content={content}
                isOpen={loginModal.isOpen}
            />
        </>
    )

}

export default LoginModal