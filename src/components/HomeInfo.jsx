import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className="font-medium sm: text-xl text-center"> {text} </p>
            <Link to={link} className="neo-brutalism-white neo-btn">
                {btnText}
                <img src={arrow} className="w-4 h-4 object-contain" />
            </Link>
        </div>
    );
};

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className="font-medium sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                Hi, I am <i>Khang Tran</i> ✌🏻 <br />
                A Software Engineer from Vietnam 🇻🇳
            </h1>
        );

    if (currentStage === 2) {
        return (
            <InfoBox
                text="Built impactful solutions at leading companies"
                link="/about"
                btnText="Learn more"

            />
        );
    }

    if (currentStage === 3) {
        return (
            <InfoBox
                text={"Spearheaded various projects to successful outcomes. \nCurious about the impact?"}
                link="/projects"
                btnText="Visit my portfolio"

            />
        );
    }

    if (currentStage === 4) {
        return (
            <InfoBox
                text="Need a project done, or looking for a Dev? I'm just a few clicks away."
                link="/about"
                btnText="Let's connect"

            />
        );
    }
    return null;
};



export default HomeInfo