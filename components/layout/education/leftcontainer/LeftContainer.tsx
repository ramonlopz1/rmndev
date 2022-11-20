import Image from 'next/image'
import styles from './LeftContainer.module.css'
import img_uninassau from '../../../../public/imgs/academy/uninassau.png'
import img_etepac from '../../../../public/imgs/academy/etepac.png'
import img_ifpe from '../../../../public/imgs/academy/ifpe.png'

export default function LeftContainer(): JSX.Element {

    const academics = [{
        name: 'UNINASSAU',
        course: 'Análise e Desenvolvimento de Sistemas',
        duration: '',
        img: img_uninassau
    }, {
        name: 'Escola Ténica Estadual Professor Antônio Carlos Gomes da Costa',
        course: 'Análise e Desenvolvimento de Sistemas',
        duration: '',
        img: img_etepac
    }, {
        name: 'Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco',
        course: 'Tecnologia em Construção de Edifícios',
        duration: '',
        img: img_ifpe
    }]

    const renderCards = () => {
        return academics.map((card, i) => {
            return (
                <div key={i} className={styles.card}>
                    <div className={styles.card_img}>
                        <Image src={card.img} alt="Card image" width={100} height={80} />
                    </div>
                    <div className={styles.card_information}>
                        <h4 className={styles.card_title}>{card.name}</h4>
                        <span>• {card.course}</span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.left_container}>
            <h1 className={styles.title}>Formação acadêmica</h1>
            <div className={styles.academic}>
                {renderCards()}
            </div>
        </div>
    )
}