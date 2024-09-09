import styles from "./page.module.css";
import Image from "next/image";
import gitLogo from "../../public/img/gitLogo.svg";
import ispanLogo from "../../public/img/Logoslogan_sm.png";
import stuLogo from "../../public/img/stulogo500px.png";
import { Content } from "./context";
import { AddLine } from "./addLine";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.App_header}>
        {/* [x] 第一頁 打招呼 */}

        <div>
          <h1 className={styles.h1Class}>Hello</h1>
          <Content text1='I’m Yun-Jou Lai' text2='This is my resume' />
          <Image src={gitLogo} alt='githubLogo' width={40} />
          <br />
          <a href='https://github.com/Gray3325'>https://github.com/Gray3325</a>
        </div>
       
      </header>
      <div className={styles.page_2_skill}>
        {/* [x] 第二頁 技能部分 */}

        <h1 className={styles.h1Class}>Skills</h1>

        <div className={styles.skills}>
          {/* 放技能的地方 */}
          <p>React</p>
          <p>Bootstrap</p>
          <p>Figma</p>
          <p>Javascript</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>MySQL</p>
          <p>Node</p>
          <p>GitHub</p>
        </div>
      </div>
      <div className={styles.page_3_education}>
        {/*[x] 第三頁 學歷部分 */}
        <h1 className={styles.h1Class}>Education</h1>

        <div className={styles.education}>
          {/* 分左右兩邊 */}

          <Content
            text1='Graduated from Front-end engineer employment development class
              ,iSpan International Inc.'
            imgUrl={ispanLogo}
            imgAlt='ispan Logo'
          />

          <Content
            text1='Graduated from the Department of Animation and Game Design ,SHU-TE
              UNIVERSITY'
            imgUrl={stuLogo}
            imgAlt='SHU-TE University Logo'
          />
        </div>
      </div>
      <div className={styles.page_4_experience}>
        {/* [ ] 第四區 經驗部分 */}
        <h1 className={styles.h1Class}>Work Experience</h1>

        <hr className={styles.verticalLine} />
        {/* 垂直的時間軸 */}
        <div className={styles.experience}>
          {/* 分成三塊 */}
          <AddLine
            text='Administrative assistant (Seven months)'
            Class={styles.leftLine}
            hrClass={styles.lineHr}
          />
          <AddLine
            text='PHP assistant engineer (Two months)'
            Class={styles.rightLine}
            hrClass={styles.lineHr}
          />
          <AddLine
            text='Amateur community managers, Amateur graphic designers, Amateur
              product developers'
            Class={styles.leftLine}
            hrClass={styles.lineHr}
          />
        </div>
      </div>
    </main>
  );
}
