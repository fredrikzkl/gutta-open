import EventPage from "~/components/EventPage";


export default function Scramble() {
    return (
        <EventPage title={"Scramble 🙍‍♂️🙍‍♂️"} course={"Parkbanan"} time={"Fredag: 13:36"} >
            <article className="prose max-w-xl mx-auto my-10 ">
                <p>To spillere per lag. Lagene trekkes tilfeldig. Det spilles vanlig stableford med scramble HCP</p>
                <ul>
                    <li>
                        <p><strong>Handicap</strong></p>
                        <p>HCP = Gjennomsnittlig handicap x 0.65. Sjekk slope for tildelte slag</p>
                    </li>
                    <li>
                        <p><strong>Tilleggskonkurranse</strong></p>
                        <p>
                            En tvungen reverse scramble i løpet av runden. Laget velger selv hvilket hull.
                        </p>
                    </li>
                </ul>
            </article>
        </EventPage>
    )
};