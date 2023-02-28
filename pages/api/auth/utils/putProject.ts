interface ProjectModel {
  name: string
  filter: string
  technologies: {}[];
  uri: string
  img: string
  type: string
};

export default function putProject(data: ProjectModel) {
  fetch("/api/projects", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
