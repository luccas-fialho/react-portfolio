import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col justify-center mx-auto max-w-6xl px-4 py-20 relative h-dvh">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Hi! I'm{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-400 to-violet-300">
            Luccas Fialho
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 text-slate-300 max-w-2xl"
        >
          I'm a frontend developer based in Curitiba, Paraná - Brazil, I'll help
          you build beautiful websites your users will love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-row gap-3"
        >
          <motion.a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium border border-white/20 hover:bg-white/5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
