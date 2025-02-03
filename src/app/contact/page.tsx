import Banner from "@/components/banner";
import InputField from "@/components/contact/inputField";
import { contactSectionOneData } from "@/lib/data";

export default async function ContactPage() {
  const sectionOneData = await contactSectionOneData();

  return (
    <div>
      {/* banner */}
      <Banner
        image={
          sectionOneData?.data?.image
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${sectionOneData.data.image}`
            : "/contact.png"
        }
        title={
          sectionOneData?.data?.name ? sectionOneData.data.name : "Contact us"
        }
      />
      {/* form section */}

      <InputField />
    </div>
  );
}
