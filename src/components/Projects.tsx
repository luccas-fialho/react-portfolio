function Projects() {
  return (
    <div id="projects" className="mx-auto max-w-6xl flex flex-col gap-4 justify-between p-4">
      <p className="text-3xl">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="min-w-100">
          <p>Project Title</p>
          <img src="#" alt="Project Image" />
          <p>Project Description</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
