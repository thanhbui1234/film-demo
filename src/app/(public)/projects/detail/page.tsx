import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center  h-screen my-36">
        <h1 className="text-[120px] text-white font-bold">
          Sống một đời có lãi
        </h1>

        <iframe
          width="100%"
          height="540"
          src="https://www.youtube.com/embed/5ESESVMoVMg?autoplay=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-b-2xl w-[95vw] max-w-[1000px] aspect-video  mt-10 z-50"
        ></iframe>
        <BackgroundBeams></BackgroundBeams>
      </div>
    </>
  );
};

export default page;
