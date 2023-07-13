import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed z-10 top-0 left-0 right-0 h-[56px] md:h-[64px] bg-white border-b border-palette-lighter md:pt-4">
            <nav className="w-full h-full flex items-center justify-between px-6 max-w-6xl mx-auto">
                <Link href="/" className="flex-center">
                    <Image
                        src="/logo.svg"
                        width={32}
                        height={32}
                        alt="logo"
                        className="mt-1"
                    />
                    <span className="text-xl font-bold pt-2 ml-1">
                        Doggy Stickers
                    </span>
                </Link>

                <Link href="/cart">
                    <FaShoppingCart className="w-6 h-6 text-palette-primary" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
