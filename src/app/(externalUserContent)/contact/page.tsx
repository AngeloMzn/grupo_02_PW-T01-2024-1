import ExternalInfo from "@/components/ExternalInfo/ExternalInfo";
import ContactDetails from "@/components/Contact/ContactDetails";

export default function Contact() {
    return (
        <>
            <ExternalInfo description={"Contato"} >
                <ContactDetails />
            </ExternalInfo>
        </>
    );
}