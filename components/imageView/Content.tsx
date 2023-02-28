import styles from "./Content.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

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
        <div className={styles.section}>
          <div className={styles.imgWrapper}>
            <div className={styles.img}>
              <Image
                src={`/imgs/myprojects/${project.img}`}
                alt="project img"
                fill
              />
            </div>
          </div>
          <div className={styles.description}>
            <a className={styles.closeBtn}>
              <Link href="/">
                <IoMdClose />
              </Link>
            </a>
            <h2 className={styles.title}>{project.name}</h2>
            <p className={styles.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              reprehenderit et nesciunt sint dolores magnam unde esse temporibus
              modi, vitae, ipsam non culpa necessitatibus earum labore
              voluptatem quibusdam sapiente hic.
            </p>

            <strong>Tecnologias Utilizadas:</strong>
            <div className={styles.techImgs}>
              {project.technologies.map((elem, i) => {
                return (
                  <div className={styles.techImg} key={i}>
                    <Image
                      src={`/imgs/technologies/${elem.name}.png`}
                      alt="technolgy img"
                      fill
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.blankLinks}>
              <a className={styles.blankLink}>
                <Link href="/">
                  <span>Demo</span>
                </Link>
              </a>
              <a className={styles.blankLink}>
                <Link href="/">
                  <span>Github</span>
                </Link>
              </a>
            </div>
            <span className={styles.date}>12/12/2021</span>
          </div>
        </div>
      ) : (
        false
      )}
    </main>
  );
}
