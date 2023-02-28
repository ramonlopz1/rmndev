import Image from "next/image";
import { TbRotate360 } from "react-icons/tb";
import { FcCalendar } from "react-icons/fc";
import styles from "./RightContainer.module.css";
import certificationList from "./certificationList";
import { useState } from "react";

export default function RightContainer(): JSX.Element {
  const [turnCard, setTurnCard] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const onClickHandler = (bool: boolean, i: number) => {
    setTurnCard(bool);
    setCardIndex(i);
  };

  const renderBoxFront = (img, i) => {
    return (
      <div className={styles.box_front}>
        <div className={styles.box_img}>
          <Image src={img} alt="box image" height={40} />
        </div>
        <div className={styles.box_btn}>
          <button
            onClick={() => onClickHandler(true, i)}
            className={styles.btn}
          >
            <TbRotate360 />
          </button>
        </div>
      </div>
    );
  };

  const renderBoxBack = (course: string, conclusion: string, i) => {
    return (
      <div className={styles.box_back}>
        <div className={styles.course}>{course}</div>
        <div className={styles.conclusion}>{conclusion}</div>
        <div className={styles.box_btn}>
          <button
            onClick={() => onClickHandler(false, i)}
            className={styles.btn}
          >
            <TbRotate360 />
          </button>
        </div>
      </div>
    );
  };

  const renderBoxes = () => {
    return certificationList.map((box, i) => {
      return (
        <div className={styles.box} key={i} id={i.toString()}>
          {turnCard && i === cardIndex
            ? renderBoxBack(box.course, box.conclusion, i)
            : renderBoxFront(box.img, i)}
        </div>
      );
    });
  };

  return <div className={styles.container}>{renderBoxes()}</div>;
}
