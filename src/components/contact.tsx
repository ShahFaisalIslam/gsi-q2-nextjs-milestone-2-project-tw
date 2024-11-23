"use client";

export default function Contact() {
    return (
        <>
            <form className="flex flex-col items-center justify-center w-full max-w-lg gap-2" onSubmit={() => { alert("Thank you for contacting!"); return false; }}>
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input className="pt-[0.1rem] pl-2" required type="text" id="name" placeholder="Your Name" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input className="pt-[0.1rem] pl-2" required type="email" id="email" placeholder="Your Email" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message">Message (Optional)</label>
                        <textarea className="pt-[0.1rem] pl-2" cols={50} rows={4} id="message" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <input className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-400 text-center hover:cursor-pointer" type="submit" />
            </form>
        </>
    );
}