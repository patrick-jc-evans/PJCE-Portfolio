import "./infoCard.css"
import githubIcon from "../../assets/githubLogo.svg"

export default function InfoCard({
    imgURL,
    title,
    shortDescription,
    githubFrontendLink,
    githubBackendLink,
}) {
    // Testing Information

    title = "ANEW"

    shortDescription =
        "A full stack project completed while at Northcoders, Anew is an imaginary news website where users can perform all the actions that you would expect of a typical news websites. This includes browsing articles, posting/deleting comments and voting on articles."

    githubFrontendLink =
        "https://github.com/patrick-jc-evans/PJCE-NC-News-Frontend"
    githubBackendLink = "https://github.com/patrick-jc-evans/PJCE-NC-News"

    return (
        <div className="infoCard">
            <img id="showcaseImage" src={imgURL} />
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <a className="fe" href={githubFrontendLink}>
                Frontend Repository
            </a>
            <a className="be" href={githubBackendLink}>
                Backend Repository
            </a>
            <div id="githubDiv">
                <img id="githubLogo" src={githubIcon} />
            </div>
        </div>
    )
}
