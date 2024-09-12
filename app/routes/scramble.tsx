import PageBody from "~/components/PageBody";


export default function Scramble() {
    return (
        <PageBody title={"Scramble 🙍‍♂️🙍‍♂️"} course={"Parkbanan"} time={"Fredag: 13:36"} >
            <article className="prose ">
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
        </PageBody>
    )
};