import styles from './TopContainer.module.css'

export default function TopContainer(): JSX.Element {
    return (
        <div className={styles.top_container}>
            <h3 className={styles.title}>Contato</h3>
            <div className={styles.email_information}>
                <div className={styles.inputs}>
                    <div className={styles.email_input}>
                        <label htmlFor="name" className={styles.email_label}>Nome</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Insira o seu nome'
                        />
                    </div>
                    <div className={styles.email_input}>
                        <label htmlFor="email" className={styles.email_label}>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder='Insira o seu email'
                        />
                    </div>
                    <div className={styles.email_input}>
                        <label htmlFor="subject" className={styles.email_label}>Assunto</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder='Insira o assunto'
                        />
                    </div>
                </div>
                <div className={styles.email_content}>
                    <textarea
                        name="content"
                        placeholder='Insira o corpo do e-mail'
                    ></textarea>
                </div>
            </div>
        </div>
    )
}