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
                style={{ backgroundColor: imgBackgroundColor }}
            />
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            {githubFrontendLink ? (
                <a className="fe" href={githubFrontendLink}>
                    Frontend Repository
                </a>
            ) : (
                <></>
            )}
            {githubBackendLink ? (
                <a className="be" href={githubBackendLink}>
                    Backend Repository
                </a>
            ) : (
                <div className="be" />
            )}
            <div id="githubDiv">
                <img id="githubLogo" src={githubIcon} />
            </div>
        </div>
    )
}
