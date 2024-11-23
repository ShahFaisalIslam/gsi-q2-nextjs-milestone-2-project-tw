import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <div className="flex justify-between items-center w-full px-12 pt-2 gap-20">
                    <p className="text-3xl">I am Shah Faisal, a Mechatronics Engineer learning Generative AI from <abbr title="Governer Sindh Initiative for Artificial Intelligence and Cloud Computing">GIAIC</abbr></p>
                    <Image src="/world.svg" alt="World" width={300} height={300} />
                </div>
            </div>
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <div className="">
                    <div className="mb-1">
                        <h3 className="text-xl">Primary and Secondary Education</h3>
                        <div className="flex justify-between items-center w-full pr-12 pt-2 gap-20">
                            <p>My primary and secondary education took place in KSA, culminating in Cambridge IGCSE and Cambridge GCE A Levels.</p>
                            <div className="w-[300px] h-[73px] bg-white relative p-[5px]">
                                <Image src="/cie.svg" alt="Cambridge" width={290} height={61} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-1">
                        <h3 className="text-xl">Higher Education</h3>
                        <div className="flex justify-between items-center w-full pr-12 pt-2 gap-20">
                            <p>I went on to study at <abbr title="National University of Sciences and Technology">NUST</abbr> in Pakistan, and obtained my Bachelors degree in Mechatronics Engineering.</p>
                            <div className="w-[300px] h-[270px] flex flex-col items-center justify-center">
                            <Image src="/nust.png" width={200} height={180} alt="NUST" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-1">
                        <h3 className="text-xl">Governor Sindh Initiative for Artificial Intelligence</h3>
                        <div className="flex justify-between items-center w-full pr-12 pt-2 gap-20">
                            <div>
                                <p>I am currently undergoing a course offered by Governor Kamran Khan Tessori, with an extremely dynamic syllabus.</p>
                                <p>The roadmap of the course is currently as follows:</p>
                                <ol className="list-decimal px-8">
                                    <li>TypeScript</li>
                                    <li>Frontend with NextJS</li>
                                    <li>Backend with Python</li>
                                    <li>Generative AI</li>
                                </ol>
                            </div>
                            <div className="w-[300px] h-[300px] bg-white relative p-[50px]">
                            <Image src="/giaic.webp" alt="GIAIC" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-semibold mb-2">Current Employment</h2>
                <div className="flex justify-between items-center w-full pr-12 pt-2 gap-20">
                <p>I am currently the head of research and development in <Link href="https://www.7gfuse.com">7GFuse</Link></p>
                <Image src="/7gfuse.webp" width={300} height={205} alt="7GFuse"/>
                </div>
            </div>
        </div>
    );
}