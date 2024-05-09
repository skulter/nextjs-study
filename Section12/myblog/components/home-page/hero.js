import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            asdasdasd
            <div className={classes.image}>
                <Image
                    src="/images/site/profile.jpeg"
                    alt="김진호"
                    width={300}
                    height={300}
                />
            </div>
            <h1>안녕하세요. 김진호입니다.</h1>
            <p>
                프론트엔드 개발자 - 자바스크립트와 리액트를 좋아하는 프론트엔드
                개발자입니다.
            </p>
        </section>
    );
};

export default Hero;
