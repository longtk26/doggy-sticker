import { Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Doggy sticker",
    description: "Website sells sticker doggy",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-[100vh]">
                <Header />
                {children}
                <footer className="flex-center py-4 mt-8">
                    Built with ❤️ by
                    <span className="text-palette-primary font-bold ml-1">
                        {" "}
                        Ngoc Long
                    </span>
                </footer>
            </body>
        </html>
    );
}
