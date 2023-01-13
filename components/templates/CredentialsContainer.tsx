import { signIn } from 'next-auth/react';
import Router from 'next/router';
import { FormEventHandler, useState } from 'react';
import styles from './CredentialsContainer.module.css'

export default function CredentialsContainer(props) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // pass the input values to credentials variable that will be utilized in auth.js (backend)
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    Router.push("/protected");
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input_user}>
            <label htmlFor="user">User</label>
            <input
              type="text"
              name="user"
              required
              value={userInfo.email}
              onChange={e => setUserInfo({ ...userInfo, email: e.target.value })
              }
              id="user"
              placeholder="Insira o seu usuário."
            />
          </div>
          <div className={styles.input_pass}>
            <label htmlFor="pass">User</label>
            <input
              type="password"
              name="pass"
              required
              value={userInfo.email}
              onChange={e => setUserInfo({ ...userInfo, password: e.target.value })
              }
              id="user"
              placeholder="Insira o seu usuário."
            />
          </div>
        </div>
        <input type="submit" className={styles.submit} value="Login" />
      </form>
    </div>
  )
}