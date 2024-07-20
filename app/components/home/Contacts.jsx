import styles from "@/app/styles/home.module.scss";
import SectionTitle from "@/app/components/common/SectionTitle";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <div className={styles.contacts} id="contacts">
      <SectionTitle title="Have some Questions or Work?" />
      <div className={styles.contactOptions}>
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
