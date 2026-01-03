import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="mx-auto max-w-6xl flex items-center justify-between mb-28 scroll-mt-24"
    >
      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-3xl">About me</p>
        <p className="mt-4">
          I'm Luccas Fialho, a Web Developer Intern at Simoldes Plásticos,
          currently working with Full Stack development. My role involves
          building and maintaining web applications using Python and Flask on
          the backend, Vanilla JavaScript on the frontend, and MySQL for
          database solutions. I'm passionate about creating efficient, scalable,
          and well-structured web applications.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
