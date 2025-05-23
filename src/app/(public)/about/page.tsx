import BannerAbout from "@/app/components/About";
import Team from "@/app/components/About/Team";

const page = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Các đường sọc dọc thưa, đứt đoạn mỗi 800px */}
      <div className="absolute inset-0 flex justify-around pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 800px, transparent 800px, transparent 820px)",
            }}
          />
        ))}
      </div>

      {/* Nội dung chính */}
      <BannerAbout />
      <Team></Team>
    </div>
  );
};

export default page;
