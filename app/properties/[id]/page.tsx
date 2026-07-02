import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import beach from "../../../public/beach_1.jpg";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {


    return (
        <main className="w-full mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={beach}
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Title</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        5 guests - 2bedrooms - 2 bathrooms
                    </span>

                    <hr />

                    <Image
                        src={beach}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="The user name"
                    />


                    <p><strong>Landlord name</strong> is your host</p>


                    <hr />

                    <p className="mt-6 text-lg">
                        Property description will go here.
                    </p>
                </div>

                <ReservationSidebar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;