import "../articles.css"
import portfolioImage from "../../../assets/plantzoneLogo.svg"
import portfolioDetails from "../../../projectDetails/plantzone.js"

export default function Portfolio() {
    return (
        <>
            <h1 className="page-title">Anew</h1>
            <img
                className="upper-image"
                src={portfolioImage}
                style={{ backgroundColor: portfolioDetails.imgBackgroundColor }}
            />
            <h2>Links</h2>
            <p>
                As this project uses the free versions of SupaBase and Netlify,
                occasionally the project will be spun down. This may lead to
                long loading times when the site is first accessed.
            </p>
            <section className="links-section">
                <a href="https://anew-pjce.netlify.app/" className="links">
                    Anew Website
                </a>
                <a href={portfolioDetails.githubFrontendLink} className="links">
                    Repository
                </a>
            </section>
        </>
    )
}
