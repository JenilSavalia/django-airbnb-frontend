'use client';

import { useRouter } from "next/navigation";



const ContactButton = ({
}) => {



    return (
        <div 
            className="mt-6 py-4 px-6 cursor-pointer bg-red-500 text-white rounded-xl hover:bg-red-700 transition"
        >
            Contact
        </div>
    )
}

export default ContactButton;