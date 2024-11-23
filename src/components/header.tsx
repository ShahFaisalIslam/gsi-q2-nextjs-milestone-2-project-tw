import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="flex justify-between bg-foreground text-background py-2 px-4">
                <ul className="flex gap-4">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </>
    )
}