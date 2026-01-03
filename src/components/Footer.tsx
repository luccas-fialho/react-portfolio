import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

function Footer() {
  return (
    <div className="mx-auto max-w-6xl flex items-center justify-between p-4 scroll-mt-24">
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-4 items-center">
          <a
            href="https://linkedin.com/in/luccas-fialho"
            target="_blank"
            className="text-5xl"
          >
            <LinkedinIcon
              className="hover:text-fuchsia-300"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://github.com/luccas-fialho"
            target="_blank"
            className="text-5xl"
          >
            <GithubIcon
              className="hover:text-fuchsia-300"
              width={50}
              height={50}
            />
          </a>
          <a
            href="mailto:luccas.fialho@gmail.com"
            target="_blank"
            className="text-5xl"
          >
            <MailIcon
              className="hover:text-fuchsia-300"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="">
            Made with ❤️ by Luccas Fialho &copy; {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
