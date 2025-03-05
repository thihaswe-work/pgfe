import FormField from "@/components/contact/form";

export default async function ContactPage() {
  return (
    <div className="">
      <div className="w-full h-[100px] md:h-[198px] relative flex items-center z-10 bg-background">
        <div className=" container mx-auto">
          <strong className=" text-lg sm:text-1xl md:text-3xl lg:text-[64px]  md:leading-[1] ">
            <div className="flex gap-2 md:gap-5">
              <h1>{"THANK YOU"}</h1>
              <h1>{""}</h1>
            </div>
            <h1 className="flex gap-2 md:gap-5">
              <span className="text-textColor ">{"FOR YOUR INTEREST"}</span>
              <span>{""}</span>
            </h1>
          </strong>
        </div>
      </div>
      <div className="container mx-auto ">
        <h3 className="font-bold">Contact Form</h3>
        <div className="flex justify-center pb-16">
          <FormField />
        </div>
      </div>
    </div>
  );
}
