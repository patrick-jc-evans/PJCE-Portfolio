export default function Anew() {
    return (
        <>
            <h1>Anew</h1>
            <h2>Backend</h2>
            <p>
                The backend of the project provides a series of api endpoints
                connected to a database. This allows for access for simple
                requests such as getting a list of users to more complex
                requests such as a list of articles sorted by how many comments
                they have. Every endpoint was tested thoroughly using SuperTest
                and Jest, meaning that triggering an error is unlikely. Tests
                for each endpoint were written before the actual endpoint
                following Test Driven Development principles, as by figuring out
                the responses expected front the endpoint ahead of time made it
                far simpler when it came to writing the endpoint. The code is
                organised using MVC and routes handle how the correct controller
                function is found from a given address. With a total of one week
                of development time, the backend has a total of 14 endpoints
                with 87 tests written for them. The database is hosted on
                SupaBase, while the api is hosted on render.
            </p>
            <h2>FrontEnd</h2>
            <p>
                The frontend of the project was built using React, and no
                additional frameworks (i.e. MUI, Bootstrap, etc). This was a
                conscious decision as I wanted to focus on improving my skills
                using CSS over the duration of this project. Future projects
                have largely followed this mentality, with my portfolio site
                being built in the same way as a way to improve my knowledge of
                CSS. The frontend has ways of handling all api responses,
                including loading messages and 404 responses. The most complex
                integration between the frontend user experience and backend api
                is in the articles page, where users are able to search by a
                variety of filters (ascending and descending) to see the
                articles they want. Optimistic rendering is used when posting
                comments for a clean user experience, but will be undone should
                an error be returned from the api request, with the user being
                notified. Building functionality like this focused on a slick
                but informative user experience. This project was developed
                exclusively for mobile.
            </p>
        </>
    )
}
