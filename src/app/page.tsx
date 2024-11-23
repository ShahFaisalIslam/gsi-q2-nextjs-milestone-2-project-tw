import HomeComponent from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 ml-4">
      <h1 className="mb-4 text-2xl font-bold">Welcome to Faisal's World!</h1>
      <HomeComponent/>
    </div>
  );
}
