import "./home.css"
import Header from "../../components/header/header"
import InfoCard from "../../components/infoCard/infoCard"
import anewInfo from "../../projectDetails/anew.js"
import anewLogo from "../../assets/anewLogo.svg"
import plantzoneInfo from "../../projectDetails/plantzone.js"
import plantzoneLogo from "../../assets/plantzoneLogo.svg"
import portfolioInfo from "../../projectDetails/portfolio.js"

export default function Home() {
    return (
        <body>
            <Header />
            <h1>Projects</h1>
            <InfoCard projectInfo={anewInfo} imgLocation={anewLogo} />
            <InfoCard projectInfo={plantzoneInfo} imgLocation={plantzoneLogo} />
            <InfoCard projectInfo={portfolioInfo} />
        </body>
    )
}
