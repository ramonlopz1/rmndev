import { useState } from 'react'
import styles from './TopContainer.module.css'

export default function TopContainer(): JSX.Element {

    const [emailContent, setEmailContent] = useState({})

    const emailHandler = (event) => {
        event.preventDefault()

        const email = {
            name: event.target[0].value,
            email: event.target[1].value,
            subject: event.target[2].value,
            textarea: event.target[3].value,
        }

        setEmailContent(email)
    }

    return (
        <div className={styles.top_container}>
            <h3 className={styles.title}>Enviar mensagem</h3>
            <form
                onSubmit={e => emailHandler(e)}
                className={styles.email_information}
            >
                <div className={styles.inputs}>
                    <div className={styles.email_input}>
                        <label htmlFor="name" className={styles.email_label}>Nome</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Insira o seu nome'
                            required
                        />
                    </div>
                    <div className={styles.email_input}>
                        <label htmlFor="email" className={styles.email_label}>E-mail</label>
                        <input
                            type="text"
                            name="email"
                            placeholder='Insira o seu email'
                            required
                        />
                    </div>
                    <div className={styles.email_input}>
                        <label htmlFor="subject" className={styles.email_label}>Assunto</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder='Insira o assunto'
                            required
                        />
                    </div>
                </div>
                <div className={styles.email_content}>
                    <h4 className={styles.content_title}>Mensagem</h4>
                    <textarea
                        name="content"
                        placeholder='Insira o corpo do e-mail'
                    ></textarea>
                    <div className={styles.email_btns}>
                        <div className={styles.email_terms}>
                            <label htmlFor="accept_terms">Aceito os termos de uso: </label>
                            <input
                                type="checkbox" name="accept_terms"
                                className={styles.checkbox}
                                required
                            />
                        </div>

                        <input type="submit" value="Enviar" className={styles.email_btn_send} />

                    </div>
                </div>
            </form>
        </div>
    )
}