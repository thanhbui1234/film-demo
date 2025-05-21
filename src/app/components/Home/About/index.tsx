import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function AboutCompany() {
  return (
    <>
      <div className="h-[40rem] mt-10 w-full rounded-md flex  bg-gray/[0.96] antialiased  relative overflow-hidden">
        <Spotlight />
        <div className="flex justify-between mt-28 flex-col md:flex-row ">
          <p className="text-white text-4xl font-bold font-roboto mx-10">
            Về công ty chúng tôi
          </p>

          <TextGenerateEffect
            words="Flex Films is a full service creative production
          based in Ho Chi Minh City, Vietnam. We committed to bringing a fresh
          way of producing films to our industry. Since then we have become one
          of the country’s leading production house, crafting TV, Viral and
          online content, KV for a wide array of local and international clients
          such as Apple, Porsche, Samsung, Pepsi, Honda, Milo, Lazada, PNJ,
          Biti's, DJI, Panasonic, Pantene, Dove, Garena, Fifa, and many more."
          />
          {/* </p> */}
        </div>

        <p className="md:ml-[300px]  text-white/65  text-center flex items-center justify-between mx-10 w-[500px]">
          As well as our production facilities we also offer fully functional
          and high-quality line production services that cater to all projects.
          We are also proud to be Vietnam’s sole representative of the
          Production Service Network. We can’t wait to get you on board!
        </p>
      </div>
    </>
  );
}
