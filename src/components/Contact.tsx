import { motion } from "framer-motion";
import Input from "./Input";

function Contact() {
  return (
    <div
      id="contact"
      className="mx-auto max-w-6xl flex flex-col justify-between p-4 pb-14"
    >
      <motion.p
        className="text-3xl mb-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <form
          action=""
          className="border border-fuchsia-300/30 p-4 w-full flex flex-col gap-4 rounded-md"
        >
          <Input title="Name" />
          <Input title="Email" type="email" />
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl mb-4">
              Message me
            </label>
            <textarea
              name=""
              id=""
              className="border rounded p-2 text-xl"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="p-4 bg-fuchsia-500 w-xl rounded hover:bg-fuchsia-300 cursor-pointer shadow transition mt-8"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
