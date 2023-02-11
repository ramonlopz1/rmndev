interface ProjectModel {
  name: string
  filter: string
  technologies: {}[];
  uri: string
  img: string
  type: string
};

export default function postProject(data: ProjectModel) {
  fetch("/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
