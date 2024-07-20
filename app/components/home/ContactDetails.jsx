import styles from "@/app/styles/home.module.scss";
import { contactItems } from "@/app/demo/contactItems";
import ContactDetail from "./ContactDetail";

const ContactDetails = () => {
  return (
    <div className={styles.details}>
      {contactItems.map((item, index) => (
        <ContactDetail
          key={index}
          icon={item.icon}
          text={item.text}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ContactDetails;
