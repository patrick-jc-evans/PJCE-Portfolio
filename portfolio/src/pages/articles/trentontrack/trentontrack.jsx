import "../articles.css"
import totLogo from "../../../assets/totLogo.svg"
import totDetails from "../../../projectDetails/tot.js"

export default function TrentonTrack() {
    return (
        <>
            <h1 className="page-title">Trent-on-Track</h1>
            <img
                className="upper-image"
                alt="Trent-on-Track Logo"
                src={totLogo}
                style={{ backgroundColor: totDetails.imgBackgroundColor }}
            />
            <h2>About</h2>
            <p>
                Trent-on-Track was an Esports LAN that I was one of two lead
                organisers of, which started off as trying to make use of a
                unlikely opportunity and turned into the largest Trackmania LAN
                held in the UK. On the 19th-20th April 2025 16 players from 8
                teams competed for a prizepool of over £1800 at the University
                of Staffordshire's Esports arena.
                <br />
                <br />
                Unlike everything else on this site, this is not a coding
                project, but it demonstrates some of my other skills. Notably
                this includes project planning, graphic design, technical
                communication and still a little bit of coding.
            </p>
            <h2>8 Month of Meetings</h2>
            <p>
                The total lead time from the initial meeting with the other lead
                until the actual event was about 8 months, by far the longest I
                have worked on a single project.
                <br />
                <img
                    src="/totPhotos/tot_production_team.jpg"
                    className="article-image"
                    alt="The Trent-on-Track production team, photo taken after the event."
                />
                The total number of people involved in the project would grow
                further from the intial 3 of us, ending up with around 25-30
                people contributing total by the time of the event. Although I
                was one of the leads and was involved in every decision at every
                step of the event's preparation, I would contribute directly
                towards the graphic design and broadcast design.
            </p>
            <h2>8,371,200 Pixels</h2>
            <p>
                It's not often that graphic design requires anything wider than
                16:9, but the venue gave me a truly ludicrous set of screen to
                design for, including a back wall stretching across the entire
                venue, with a resolution of 7680x1080.
                <br />
                <img
                    src="/totPhotos/tot_graphics_showcase.jpg"
                    className="article-image"
                    alt="Image of the stage area at Trent on Track, taken during Wholes vs Moonveil."
                />
                Figuring out how to design something that looks good when
                displayed at the width of a room was a challenge, but a lot of
                fun. I poured countless hours into the graphics package for the
                venue, and when I saw it for the first time full size the day
                before the event I could not have been happier with how it
                looked.
            </p>
            <h2>Code!</h2>
            <p>
                Despite this project being tagged with project planning and
                graphic design, there was a bit of coding used to simplify the
                most complex stream graphic.
                <br />
                <br />
                Displaying a knockout bracket, particularly if it has double
                elimination, usually ends up in a very messy file. Instead I
                spent an evening building a website, where entering the winner
                of once match would move them into the correct part of the
                bracket for the next stage.
                <br />
                <img
                    src="/totPhotos/tot_bracket.jpg"
                    className="article-image"
                    alt="Screenshot of the bracket website filled in with the final results."
                />
                The site is hosted at{" "}
                <a
                    href="https://padsters-beautiful-brackets.netlify.app/"
                    className="links-basic"
                >
                    https://padsters-beautiful-brackets.netlify.app/
                </a>
                , and you can enter a winner by simply clicking on the yellow
                box next to a team name, and typing "3" to mark the winner as
                matches were best of 5. Given the site was built specifically
                for use by a production team, it has a few issues such a
                clearing results. In the future I'd like to adapt this project
                to be useable for more competitions which I am involved in
                production for.
            </p>
            <h2>Gallery</h2>
            <p>
                Credit to{" "}
                <a href="https://x.com/doomject" className="links-basic">
                    @doomject
                </a>{" "}
                for all photos!
            </p>
            <section className="links-section">
                <a href="/" className="back">
                    Back to Home
                </a>
            </section>
        </>
    )
}
