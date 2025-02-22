import ApplyForm from "@/components/careers/applyForm";
import ApplyFormTitle from "@/components/careers/applyFormTitle";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  console.log(slug);
  return (
    <div className=" py-16 container mx-auto px-3 md:px-2 lg:px-0 ">
      {/* role */}
      <ApplyFormTitle />
      {/* requirement */}
      <div className="mt-16 ">
        <h3 className="text-md font-semibold">Apply Form</h3>
        <div className="flex justify-center">
          <div className="w-[640px]">
            <ApplyForm />
          </div>
        </div>
      </div>
    </div>
  );
}
