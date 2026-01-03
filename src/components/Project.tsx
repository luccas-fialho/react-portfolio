import { motion } from "framer-motion";

function Project() {
  return (
    <motion.div
      className="max-w-2xl flex flex-col gap-4 shadow-2xl p-4 bg-slate-900 rounded-md"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img
        src="https://media.istockphoto.com/id/1147544807/pt/vetorial/thumbnail-image-vector-graphic.jpg?s=2048x2048&w=is&k=20&c=yWSaM2OrO-gxD0WJAQhl15Y7u3bZtzxnQX1u-XAqTBE="
        alt="Project Image"
        className="rounded-md hover:scale-105 transition mb-4"
      />
      <p className="text-xl">Project Title</p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in
        commodi aliquam excepturi ullam dignissimos, ipsum autem aperiam
        provident vero voluptates! Ipsa neque praesentium vitae molestiae ad
        aliquid eos eaque.
      </p>
    </motion.div>
  );
}

export default Project;
