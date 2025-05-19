import "./infoCard.css"
import githubIcon from "../../assets/githubLogo.svg"

export default function InfoCard({ imgLocation, projectInfo }) {
    // Testing Information

    const {
        title,
        shortDescription,
        githubFrontendLink,
        githubBackendLink,
        imgBackgroundColor,
    } = projectInfo

    return (
        <div className="infoCard">
            <img
                id="showcaseImage"
                src={imgLocation}
                alt={title + " logo"}
                style={{ backgroundColor: imgBackgroundColor }}
            />
            <a href={"/" + title.toLowerCase()} className="title">
                {title}
            </a>
            <p className="description">{shortDescription}</p>
            {githubFrontendLink ? (
                <a className="fe" href={githubFrontendLink}>
                    Frontend Repository
                </a>
            ) : (
                <div className="fe" />
            )}
            {githubBackendLink ? (
                <a className="be" href={githubBackendLink}>
                    Backend Repository
                </a>
            ) : (
                <div className="be" />
            )}
            <div id="githubDiv">
                <img id="githubLogo" alt="GitHub Logo" src={githubIcon} />
            </div>
        </div>
    )
}
