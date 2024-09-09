import styles from "./page.module.css";
import Image from "next/image";
import gitLogo from "../../public/img/gitLogo.svg";
import ispanLogo from "../../public/img/Logoslogan_sm.png";
import stuLogo from "../../public/img/stulogo500px.png";
import { TitleH1 } from "./title";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.App_header}>
        {/* [x] 第一頁 打招呼 */}
        
        {/* <div className={styles.box_left}>
          <h1>Hello</h1>

          <p>
            I’m Yun-Jou Lai
            <br />
            This is my resume
          </p>
          <Image src={gitLogo} alt='githubLogo' width={40} />
          <br />
          <a href='https://github.com/Gray3325'>https://github.com/Gray3325</a>
        </div> */}
        <div className={styles.page_1_card}>
          <div className={styles.personalPhoto}></div>
          <p>Yun-Jou Lai</p>
        </div>
      </header>
      <div className={styles.page_2_skill}>
        {/* [x] 第二頁 技能部分 */}

        <h1>Skills</h1>

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
        <h1>Education</h1>

        <div className={styles.education}>
          {/* 分左右兩邊 */}
          <div>
            <p>
              Graduated from Front-end engineer employment development class
              ,iSpan International Inc.
            </p>
            <Image src={ispanLogo} alt='ispan Logo' />
          </div>
          <div>
            <p>
              Graduated from the Department of Animation and Game Design ,SHU-TE
              UNIVERSITY
            </p>
            <Image src={stuLogo} alt='SHU-TE University Logo' />
          </div>
        </div>
      </div>
      <div className={styles.page_4_experience}>
        {/* [ ] 第四區 經驗部分 */}
        <h1>Work Experience</h1>

        <hr className={styles.verticalLine} />{/* 垂直的時間軸 */}
        <div className={styles.experience}>
          {/* 分成三塊 */}
          <div className={styles.leftLine}>
            <p>Administrative assistant (Seven months)</p>
            <hr />
          </div>
          <div className={styles.rightLine}>
            <hr />
            <p>PHP assistant engineer (Two months)</p>
          </div>
          <div className={styles.leftLine}>
            <p>
              Amateur community managers, Amateur graphic designers, Amateur
              product developers (Four years)
            </p>
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
}
