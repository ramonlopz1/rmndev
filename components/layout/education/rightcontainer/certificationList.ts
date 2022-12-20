import img_certifpro from '../../../../public/imgs/certifications/certifpro.png'
import img_oracle from '../../../../public/imgs/certifications/oracle.png'
import img_cod3r from '../../../../public/imgs/certifications/cod3r.png'
import img_udemy from '../../../../public/imgs/certifications/udemy.png'
import img_alura from '../../../../public/imgs/certifications/alura.png'
import img_qualificamais from '../../../../public/imgs/certifications/qualificamais.png'
import { StaticImageData } from 'next/image'

type model = {
    name: string,
    course: string,
    conclusion: string,
    img: StaticImageData
}

const certificationList: Array<model> = [{
    name: 'Oracle',
    course: 'Oracle Cloud Infrastructure Foundations',
    conclusion: '10/2022',
    img: img_oracle
}, {
    name: 'UNINASSAU',
    course: 'Scrum Foundation Professional certificate SFPC',
    conclusion: '11/2022',
    img: img_certifpro
}, {
    name: 'COD3R',
    course: 'JavaScript - Web Moderno',
    conclusion: '05/2022',
    img: img_cod3r
}, {
    name: 'UNINASSAU',
    course: 'ReactJS & NextJS',
    conclusion: '10/2022',
    img: img_cod3r
}, {
    name: 'Udemy',
    course: 'Especificações de APIs com Swagger e OpenAPI',
    conclusion: '10/2022',
    img: img_udemy
}, {
    name: 'Udemy',
    course: 'Oracle Integration Cloud Services',
    conclusion: '10/2022',
    img: img_udemy
}, {
    name: 'UNINASSAU',
    course: 'Análise e Desenvolvimento de Sistemas',
    conclusion: '',
    img: img_qualificamais
}, {
    name: 'Alura',
    course: 'Oracle Cloud: Banco de dados e Infraestrutura como código',
    conclusion: '08/2022',
    img: img_alura
}, {
    name: 'Alura',
    course: 'MySQL',
    conclusion: '04/2022',
    img: img_alura
}, {
    name: 'Alura',
    course: 'Java: Collections',
    conclusion: '05/2022',
    img: img_alura
}, {
    name: 'Alura',
    course: 'Java: Orientação a Objetos',
    conclusion: '05/2022',
    img: img_alura
}, {
    name: 'Alura',
    course: 'Java: Streams, Reader e Writes',
    conclusion: '05/2022',
    img: img_alura
}, {
    name: 'Alura',
    course: 'Acessibilidade web',
    conclusion: '05/2022',
    img: img_alura
}, {
    name: 'Alura',
    course: 'Git e Github',
    conclusion: '05/2022',
    img: img_alura
}]

export default certificationList