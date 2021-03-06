import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Software Engineer", "Sales", "Street Dancer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                    <img src="https://github.com/Shinji-Nishikita/S_Nishikita_website/blob/master/public/assets/IMG_0334.JPG?raw=true" alt="" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Shinji Nishikita</h1>
                    <h2>I'm a <span ref={textRef}></span></h2>
                </div>
            </div>
        </div>
    )
}
