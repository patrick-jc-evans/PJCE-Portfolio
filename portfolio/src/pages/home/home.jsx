import "./home.css"
import Header from "../../components/header/header"
import InfoCard from "../../components/infoCard/infoCard"
import anewInfo from "../../projectDetails/anew.js"
import anewLogo from "../../assets/anewLogo.svg"
import plantzoneInfo from "../../projectDetails/plantzone.js"
import plantzoneLogo from "../../assets/plantzoneLogo.svg"
import portfolioInfo from "../../projectDetails/portfolio.js"
import portfolioLogo from "../../assets/portfolioLogo.svg"
import totInfo from "../../projectDetails/tot.js"
import totLogo from "../../assets/totLogo.svg"

export default function Home() {
    return (
        <>
            <h1>Projects</h1>
            <InfoCard projectInfo={totInfo} imgLocation={totLogo} />
            <InfoCard projectInfo={plantzoneInfo} imgLocation={plantzoneLogo} />
            <InfoCard projectInfo={anewInfo} imgLocation={anewLogo} />
            <InfoCard projectInfo={portfolioInfo} imgLocation={portfolioLogo} />
        </>
    )
}
