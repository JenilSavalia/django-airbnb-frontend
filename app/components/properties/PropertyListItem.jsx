import Image from "next/image";
import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";

import image from "../../../public/beach_1.jpg";

const PropertyListItem = ({
}) => {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => router.push(`/properties/1`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={image}
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house"
                />

                <FavoriteButton
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">House Name</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>$50</strong> per night</p>
            </div>
        </div>
    )
}

export default PropertyListItem;