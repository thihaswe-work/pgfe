import HeroSection from "@/components/aboutUsPage/heroSection";
import Image from "next/image";

const AboutPage = () => {
  const rectangleImage = "/rectangle.png";
  const maskGroupImage = "/mask-group.png";

  return (
    <div>
      <div className="w-full h-[198px] relative">
        <Image src={"/aboutus.png"} alt="about-us photo" fill />
      </div>
      <div className="p-[45px] flex flex-col lg:gap-[120px] my-[120px]">
        <HeroSection
          layout={"right"}
          image={rectangleImage}
          title={"What We’re Doing?"}
          desc={`Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. 
              Lectus eu imperdiet in at sed. Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non 
              faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam odio imperdiet. Neque parturient 
              vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. 
              Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.

  Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. 
  Cras mauris feugiat fusce eget dolor eu a dui consequat. Et pretium 
  viverra quam et nisi vestibulum vel. Faucibus aliquet risus massa tristique ultricies. 
  Nulla aliquam scelerisque lacus id feugiat. Nec senectus urna proin proin sit. Accumsan id amet sit quam. 
  Interdum elit ullamcorper imperdiet non neque dictum egestas massa lorem.`}
        />
        <HeroSection
          layout={"left"}
          image={maskGroupImage}
          title={"How Did We Build Our Team?"}
          desc={`Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu 
              imperdiet in at sed. Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras.
              Lorem ac tellus tincidunt tempor nam odio imperdiet. Neque parturient vestibulum vestibulum in turpis urna cursus est cras.
                Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat 
                viverra duis.`}
        />
      </div>
    </div>
  );
};

export default AboutPage;
