import styles from "./Content.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  name: string;
  filter: string;
  technologies: { name: string }[];
  uri: string;
  img: string;
  type: string;
  date?: Date;
};

export default function Content(): JSX.Element {
  const { query } = useRouter();
  let projectType: Project;

  const [project, setProject] = useState(projectType);

  useEffect(() => {
    fetch(`/api/projects?id=${query.id}`)
      .then((data) => data.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <main className={styles.content}>
      {project ? (
        <div className={styles.mainBox}>
          <div className={styles.topContainer}>
            <h2 className={styles.title}>{project.name}</h2>
            <p className={styles.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              reprehenderit et nesciunt sint dolores magnam unde esse temporibus
              modi, vitae, ipsam non culpa necessitatibus earum labore
              voluptatem quibusdam sapiente hic.
            </p>
            <strong>Tecnologias Utilizadas:</strong>
            <div></div>
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img}>
              <Image
                src={`/imgs/myprojects/${project.img}`}
                alt="project img"
                fill
              />
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </main>
  );
}
