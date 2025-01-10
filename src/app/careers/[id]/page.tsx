import MiniList, { MiniCard } from "@/components/careers/CustomMini";

// After
// type Params = Promise<{ id: string }>;
// type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// export async function generateMetadata(props: {
//   params: Params;
//   searchParams: SearchParams;
// }) {
//   const params = await props.params;
//   const searchParams = await props.searchParams;
//   const id = params.id;
//   const query = searchParams.query;
// }

export default async function Page() {
  // const params = await props.params;
  // const searchParams = await props.searchParams;
  // const id = params.id;

  return (
    <div className=" px-[43px] md:px-[87px] lg:px-[90px] flex justify-center ">
      <div className="flex flex-col gap-10">
        {/* role */}
        <div className="max-w-[436px] flex flex-col gap-4 justify-start ">
          <h3 className="text-sectionColor text-xl font-bold">
            Frontend Developer
          </h3>
          <div>
            <h5 className="text-md">FreshMoe Company</h5>
            <span className="text-sectionColor text-sm">Ecommerce</span>
          </div>
          <div className="text-sm">
            <MiniCard title={"Location"} realTitle={"Remote"} />
            <MiniCard title="Salary" realTitle="10Lakhs-12Lakhs" />
          </div>
          <div className="flex text-sm">
            <MiniCard title={"Form Open"} realTitle={"12.10.2024"} />
            <MiniCard title={"Form Close"} realTitle={"12.30.2024"} />
          </div>
        </div>

        {/* Requirement */}
        <MiniList
          title="Requirement"
          list={[
            "lLorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed. ",
            "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam,",
            "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. ",
            "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
          ]}
        />
        {/* Responsibility */}
        <MiniList
          title="Responsibility"
          list={[
            "lLorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed. ",
            "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam,",
            "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. ",
            "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
          ]}
        />

        {/* Benefit & Allowance */}
        <MiniList
          title="Benefit & Allowance"
          list={[
            "lLorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed. ",
            "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam,",
            "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. ",
            "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
          ]}
        />

        {/* button */}
        <div className="flex gap-5 md:gap-0 justify-between flex-col md:flex-row">
          <button className="bg-sectionColor p-5 rounded-lg md:px-10 w-[138px]  font-semibold">
            Apply
          </button>
          <div>
            <MiniCard title="Email" realTitle="FreshMoe@gmail.com" />
            <MiniCard title="Contact" realTitle="+959 999 999 999" />
          </div>
        </div>
      </div>
    </div>
  );
}
