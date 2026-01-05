import { motion } from "framer-motion";
import { LinkedinIcon, MailIcon, SmartphoneIcon } from "lucide-react";

function Contact() {
  return (
    <div
      id="contact"
      className="mx-auto max-w-6xl flex flex-col justify-between p-4 pb-14"
    >
      <motion.p
        className="text-4xl mb-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Contact<span className="text-fuchsia-500">.</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4"
      >
        <a
          href="mailto:luccas.fialho@gmail.com"
          className="flex items-center gap-4 hover:text-fuchsia-300 group"
        >
          <div className="border border-white rounded-full p-2 group-hover:border-fuchsia-300">
            <MailIcon />
          </div>
          E-mail
        </a>

        <a
          href="https://linkedin.com/in/luccas-fialho"
          className="flex items-center gap-4 hover:text-fuchsia-300 group"
        >
          <div className="border border-white rounded-full p-2 group-hover:border-fuchsia-300">
            <LinkedinIcon />
          </div>
          LinkedIn
        </a>

        <a
          href="https://wa.me/5541992475613?text=Hello%21%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20possible%20opportunity.%20Are%20you%20available%20to%20chat%3F"
          target="_blank"
          className="flex items-center gap-4 hover:text-fuchsia-300 group"
        >
          <div className="border border-white rounded-full p-2 group-hover:border-fuchsia-300">
            <SmartphoneIcon />
          </div>
          WhatsApp
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
