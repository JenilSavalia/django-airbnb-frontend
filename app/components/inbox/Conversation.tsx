'use client';

import router from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";



const Conversation = ({

}) => {
    const router = useRouter();

    return (
        <div className="px-6 py-4 cursor-pointer border border-gray-300 rounded-xl">
            <p className="mb-6 text-xl">User name</p>

            <p
                onClick={() => router.push(`/inbox/1`)}
                className="text-airbnb-dark"
            >
                Go to conversation
            </p>
        </div>
    )
}

export default Conversation;