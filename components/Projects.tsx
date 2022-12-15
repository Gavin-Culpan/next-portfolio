/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffaed5]/80"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#ffaed5]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/16c5344682d67bf3d649750eef72696d41b81bc8-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/f43dbcc55cc0f98f7feda56ee6ce0da830218864-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/8a940afc91f01e5ed956cb90be40a7b2f31dc143-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/aac9395a2c28e53fc7fba1631dee23e5f5688897-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/b878d219f2dd6db91d1e1775c57cda549eca40ef-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/54772bc283929e2f3f04f39ed3cad3de09f7d95f-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/ada416296269b611c4079b6e7520ce31c4003a89-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/01l08paj/production/ece3d3b79b9af2599d5aa84ae624ed3eadc2d536-500x500.png?w=2000&fit=max&auto=format"
                  alt=""
                />
                {/*{project?.technologies.map((technology) => (
                  <img
                    className="h-5 w-5"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}*/}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#ffaed5]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
