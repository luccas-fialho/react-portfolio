import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  return (
    <div
      id="projects"
      className="mx-auto max-w-6xl flex flex-col gap-4 justify-between p-4 mb-28 scroll-mt-24"
    >
      <motion.p
        className="text-4xl"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Projects<span className="text-fuchsia-500">.</span>
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
