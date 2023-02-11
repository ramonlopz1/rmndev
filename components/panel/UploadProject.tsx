import styles from "./UploadProject.module.css";
import { useState } from "react";
import postProject from "../../pages/api/auth/utils/postProject";

const initialState = {
  name: "Codificador de Textos",
  filter: "old",
  technologies: [],
  uri: "https://google.com",
  img: "https:imgur.com.br",
  type: "web",
  date: ''
}


export default function UploadProject(): JSX.Element {
  const [state, setState] = useState(initialState);

  const onChangeHandler = (e) => {
    if (e.target.type === "checkbox") {
      const { technologies } = state

      setState({
        ...state,
        technologies: [...technologies, { [e.target.name]: e.target.value }],
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
        {renderInputText("img", "IMG")}
        <input type="date" name="date" className={styles.date} onChange={onChangeHandler} />
        <select name="type" id="" className={styles.select}>
          <option value="web">Web</option>
          <option value="design">Design</option>
        </select>
        <input type="submit" value="Salvar" className={styles.submit} />
      </div>
    </form>
  );
}