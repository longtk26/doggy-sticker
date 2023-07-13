import { Card } from "@/components";

export default function Home() {
    return (
        <main className="w-full mt-[96px] md:mt-[104px]">
            <div className="flex flex-col items-center justify-center px-2">
                <h1 className="text-palette-primary text-4xl font-bold">
                    Get Doggy Stickers!
                </h1>
                <p className="text-gray-600 text-[18px] text-center mt-4 md:mt-8 max-w-[586px]">
                    Times are tough. Liven up your home with some cute Doggy
                    Stickers. 🐶
                </p>
            </div>
            <section className="flex mt-8">
                <div className="m-auto grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 md:gap-x-[100px]">
                    {datas?.map((item, index) => (
                        <Card sticker={item} key={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}

const datas = [
    {
        title: "The Unicorn",
        image: "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=3840&q=75",
        des: "They exist!",
        cost: "9.99",
    },
    {
        title: "The Unicorn",
        image: "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=3840&q=75",
        des: "They exist!",
        cost: "9.99",
    },
    {
        title: "The Unicorn",
        image: "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=3840&q=75",
        des: "They exist!",
        cost: "9.99",
    },
    {
        title: "The Unicorn",
        image: "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=3840&q=75",
        des: "They exist!",
        cost: "9.99",
    },
    {
        title: "The Unicorn",
        image: "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=3840&q=75",
        des: "They exist!",
        cost: "9.99",
    },
];
