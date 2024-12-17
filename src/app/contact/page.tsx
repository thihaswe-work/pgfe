import Banner from "@/components/banner";
import InputField from "@/components/contact/inputField";

export default function ContactPage() {
  return (
    <div>
      {/* banner */}
      <Banner image={"/keyboard-contact.png"} title={"Contact us"} />
      {/* form section */}

      <InputField />
    </div>
  );
}
