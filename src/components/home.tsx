import Link from "next/link";

export default function HomeComponent () {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">My Projects</h2>
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[300px] duration-500 hover:duration-500 hover:max-w-[350px]  bg-[--card-background] px-6 py-8 rounded-2xl text-center hover:bg-[--card-background-hover]">
                    <h3 className="text-bold text-lg mb-2">Interactive Resume Builder</h3>
                    <p>Enter your details, and generate your resume on the fly!</p>
                    <Link className="text-[--card-background]" href="https://interactive-resume-builder-mu.vercel.app/">&gt; Go to Interactive Resume Builder</Link>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[300px] duration-500 hover:duration-500 hover:max-w-[350px]  bg-[--card-background] px-6 py-8 rounded-2xl text-center hover:bg-[--card-background-hover]">
                    <h3 className="text-bold text-lg mb-2">Everyday Life Blog</h3>
                    <p>Check out AI-generated articles on different aspects of everyday life!</p>
                    <Link className="text-[--card-background]" href="https://giaicquarter2assignment4and5.vercel.app/">&gt; Go to Everyday Life</Link>
                </div>
            </div>
        </div>
    );
}