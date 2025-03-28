import "../articles.css"
import portfolioImage from "../../../assets/githubLogo.svg"
import portfolioDetails from "../../../projectDetails/portfolio.js"
import portfolioWireframe from "../../../assets/portfolioWireframe.png"

export default function Portfolio() {
    return (
        <>
            <h1 className="page-title">Portfolio Website</h1>
            <img
                className="upper-image"
                alt="Portfolio Logo"
                src={portfolioImage}
                style={{ backgroundColor: portfolioDetails.imgBackgroundColor }}
            />
            <h2>About</h2>
            <p>
                Considering I am a web developer, it would seem silly not to
                create my own site to showcase what projects I have worked on.
                This site does however show some skills not seen in the other
                projects...
            </p>
            <h2>Dynamic Styling</h2>
            <p>
                The site has two different designs that switch at a width of
                800px. Simply adjusting your browser window now should showcase
                this. For this I created two different wireframes for the site,
                tracking how different components would need to be repositioned
                upon switching from desktop to mobile view.
                <img
                    src={portfolioWireframe}
                    alt="Wireframe for the portfolio website."
                    className="article-image"
                />
                Rather than being developed as mobile first or desktop first,
                both were done in sync as to avoid any unexpected issues later
                in development.
            </p>
            {/* <h2>Accessibility</h2>
            <p>

            </p> */}
            <h2>Links</h2>
            <p>
                Don't really need a link to the website for this one - you're
                already here aren't you?
            </p>
            <section className="links-section">
                <a href={portfolioDetails.githubFrontendLink} className="links">
                    Github Repository
                </a>
            </section>
            <section className="links-section">
                <a href="/" className="back">
                    Back to Home
                </a>
            </section>
        </>
    )
}
