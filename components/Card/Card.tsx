import Image from "next/image";
import Link from "next/link";

interface CardProps {
    sticker: { title: string; image: string; des: string; cost: string };
}

const Card = ({ sticker }: CardProps) => {
    const query = sticker?.title.toLowerCase().replace(" ", "-");

    return (
        <Link
            href={`/products/${query}`}
            className="w-72 h-[480px] rounded shadow-lg border border-palette-lighter"
        >
            <div className="w-full h-[288px] border-b-2 border-palette-lighter overflow-hidden">
                <Image
                    src={sticker?.image}
                    width={286}
                    height={286}
                    alt={sticker?.title}
                    className="hover:scale-[1.12] transition-transform duration-500"
                />
            </div>
            <div className="py-4 pl-4 relative h-[192px]">
                <h3 className="text-palette-primary text-2xl font-semibold">
                    {sticker?.title}
                </h3>
                <p className="text-lg text-gray-600 font-light mt-4">
                    {sticker?.des}
                </p>

                <div className="absolute py-2 pr-4 pl-8 bg-palette-lighter right-0 bottom-4 triangle">
                    <span className="text-lg text-palette-dark">
                        ${sticker.cost}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default Card;
