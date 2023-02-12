import styles from "./UploadProject.module.css";
import { useState } from "react";
import postProject from "../../pages/api/auth/utils/postProject";
import postImg from "../../pages/api/auth/utils/postImg";

const initialState = {
  name: "Codificador de Textos",
  filter: "old",
  technologies: [],
  uri: "https://google.com",
  img: "https:imgur.com.br",
  type: "web",
  date: "",
};

export default function UploadProject(): JSX.Element {
  const [state, setState] = useState(initialState);

  const onChangeHandler = (e) => {
    if (e.target.type === "checkbox") {
      const { technologies } = state;
      setState({
        ...state,
        technologies: [...technologies, { name: e.target.value }],
      });
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    postProject(state);
  };

  const uploadHandler = (e: any) => {
    const formData = new FormData();
    const inputFile = e.target;
    formData.append(inputFile.name, inputFile.files[0]);

    postImg({
      formData: formData,
    });

    const fileName = (inputFile.files[0].name).replaceAll(" ", "_")
    setState({
      ...state,
      img: fileName
    })
  };

  const renderInputText = (name: string, label: string) => {
    return (
      <div className={styles.input_box}>
        <label htmlFor={name}>{label}:</label>
        <input type="text" name={name} id="" onChange={onChangeHandler} />
      </div>
    );
  };

  const renderInputCheck = (name: string, label: string) => {
    return (
      <div className={styles.checkbox}>
        <label htmlFor={name}>{label}</label>
        <input
          type="checkbox"
          name={name}
          id=""
          value={name}
          onChange={onChangeHandler}
        />
      </div>
    );
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles.wrapper}>
        {renderInputText("name", "Nome")}
        {renderInputText("filter", "Filtro")}

        <div className={styles.inputChecks}>
          {renderInputCheck("html", "HTML5")}
          {renderInputCheck("js", "JS")}
          {renderInputCheck("css", "CSS")}
        </div>
        {renderInputText("uri", "URI")}
        <input type="file" name="projectimg" onChange={uploadHandler} className={styles.file} />
        <input
          type="date"
          name="date"
          className={styles.date}
          onChange={onChangeHandler}
          accept="image/png, image/gif, image/jpeg"
        />
        <select name="type" id="" className={styles.select} onChange={onChangeHandler}>
          <option value="web">Web</option>
          <option value="designer">Designer</option>
        </select>
        <input type="submit" value="Salvar" className={styles.submit} />
      </div>
    </form>
  );
}
