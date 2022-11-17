import styles from './SocialLinks.module.css'
import {
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaBootstrap,
    FaJs,
    FaNodeJs,

} from 'react-icons/fa'

import { VscJson, VscRegex } from "react-icons/vsc";

import { SiNextdotjs, 
    SiOracle,
    SiWebpack,
    SiMongodb,
    SiPowershell
 } from "react-icons/si";

import {
    DiMysql,
    DiGit,
    DiGithubBadge,
    DiReact,
    DiNpm,
    
    
    
} from "react-icons/di";

import { TbCloudComputing } from "react-icons/tb";

export default function SocialLinks(props): JSX.Element {
    return (
        <div className={styles.container}>
            <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <FaJs />
            <DiReact />
            <SiNextdotjs />
            <SiWebpack />
            <FaNodeJs />
            <VscJson />
            <SiMongodb />
            <DiMysql />
            <VscRegex />
            <SiPowershell />
            <DiNpm />
            <DiGit />
            <DiGithubBadge />
            <SiOracle />
            <TbCloudComputing />
        </div>
    )
}