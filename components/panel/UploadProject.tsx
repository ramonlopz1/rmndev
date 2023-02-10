import styles from "./UploadProject.module.css";
import { useState } from "react";

type ProjectModel = {
  name: "Codificador de Textos";
  filter: "old";
  technologies: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JAVASCRIPT" }];
  uri: "https://google.com";
  img: "https:imgur.com.br";
  type: "web";
};

export default function UploadProject(): JSX.Element {
  const [state, setState] = useState<ProjectModel>();

  const postMongoDB = (data: ProjectModel) => {
    fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    postMongoDB(state);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input_box">
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name" id="" onChange={onChangeHandler} />
      </div>
      <div className="input_box">
        <label htmlFor="filter">Filter: </label>
        <input type="text" name="filter" id="" onChange={onChangeHandler} />
      </div>
      <div className="input_box">
        <label htmlFor="filter">Nome: </label>
        <input type="text" name="filter" id="" onChange={onChangeHandler} />
      </div>
      <div className="input_box">
        <div className={styles.checkbox}>
          <label htmlFor="check_html">HMLT5</label>
          <input
            type="checkbox"
            name="check_html"
            id=""
            value="html"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <label htmlFor="check_js">JS</label>
          <input
            type="checkbox"
            name="check_js"
            id=""
            value="JS"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <label htmlFor="check_js">JS</label>
          <input
            type="checkbox"
            name="check_js"
            id=""
            value="JS"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <label htmlFor="check_js">JS</label>
          <input
            type="checkbox"
            name="check_js"
            id=""
            value="JS"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <label htmlFor="check_js">JS</label>
          <input
            type="checkbox"
            name="check_js"
            id=""
            value="JS"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="input_box">
        <label htmlFor="uri">URI: </label>
        <input type="text" name="uri" id="" onChange={onChangeHandler} />
      </div>
      <div className="input_box">
        <label htmlFor="filter">Imagem: </label>
        <input type="text" name="img" id="" onChange={onChangeHandler} />
      </div>
      <div className="input_box">
        <label htmlFor="filter">Tipo: </label>
        <input type="text" name="img" id="" />
        <select name="type" id="">
          <option value="web">Web</option>
          <option value="design">Design</option>
        </select>
      </div>
      <input type="submit" value="Salvar" />
    </form>
  );
}

`{
    "_id":"63a0c0d4c6ba4f10b3515906",
    "name":"Codificador de Textos",
    "filter":"old",
    "technologies":[
        {"_id":"63c84e903c5187777ad29226","name":"HTML5"},
        {"_id":"63c84e903c5187777ad29227","name":"CSS3"},
        {"_id":"63c84e903c5187777ad29228","name":"JAVASCRIPT"
    }],
    "uri":"https://google.com",
    "img":"https:imgur.com.br",
    "type":"web"
}`;
