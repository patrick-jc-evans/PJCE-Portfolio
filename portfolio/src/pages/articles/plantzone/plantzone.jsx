import "../articles.css"
import plantzoneImage from "../../../assets/plantzoneLogo.svg"
import plantzoneDetails from "../../../projectDetails/plantzone.js"
import pzWireframe from "../../../assets/pzWireFrame.png"

export default function PlantZone() {
    return (
        <>
            <h1 className="page-title">PlantZone</h1>
            <img
                className="upper-image"
                src={plantzoneImage}
                style={{ backgroundColor: plantzoneDetails.imgBackgroundColor }}
            />
            <h2>About</h2>
            <p>
                PlantZone is a tech demo for an app built with react native to
                search for and track plants. This was built over 3 weeks in a
                group while of 6 at the end of the Northcoders JavaScript
                bootcamp. <br />
                <br />I exclusively worked on the frontend of the app, as within
                the group that was where my skillset was needed.
            </p>
            <h2>Design</h2>
            <p>
                Within the group I took charge of the design work for the
                frontend, creating wireframes in figma to not only plan
                functionality of the app, but to design the standard page
                layout.
                <img src={pzWireframe} className="article-image" />
                Part of the wireframe is shown above. A challenge for me was
                considering how users hold a phone, and where buttons would be
                most useful. This is why the back button is found in the footer
                for instance.
            </p>
            <h2>Frontend Development</h2>
            <p>
                Frontend functionality for this project presented a few issues,
                namely displaying the correct information for a specific user
                (which we had to use context for), and finding the right balance
                between instantly responsive design while waiting for API
                responses. This required consideration on a case by case basis,
                where I considered what I as a user would want the application
                to achieve, not what was easiest to be implemented.
                <br />
                <br />
                Another challenge for this project was developing for both IOS
                and android, and all the slightly different behaviours they
                carried. Although the design looks good on both, there are some
                inconsistencies due to the
            </p>
            <h2>Links</h2>
            <p>
                The development of this was simply as a tech demo, so cannot be
                downloaded as an app. All the development was done using Expo to
                test on mobile devices.
            </p>
            <section className="links-section">
                <a href={plantzoneDetails.githubFrontendLink} className="links">
                    Frontend Repository
                </a>
                <a href={plantzoneDetails.githubBackendLink} className="links">
                    Backend Repository
                </a>
            </section>
        </>
    )
}
