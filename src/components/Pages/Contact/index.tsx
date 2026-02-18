import ContactForm from "./ContactForm";
import ContactHome from "./ContactHome";
import ContactInfo from "./ContactInfo";

export default function ContactIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <ContactHome />
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}
