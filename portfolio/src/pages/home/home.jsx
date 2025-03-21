import "./home.css"
import Header from "../../components/header/header"
import InfoCard from "../../components/infoCard/infoCard"

export default function Home() {
    return (
        <body>
            <Header />
            <h1>Projects</h1>
            <InfoCard />
            <InfoCard />
            <InfoCard />
        </body>
    )
}
