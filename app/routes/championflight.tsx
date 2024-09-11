import EventPage from "../components/EventPage";


export default function Strokeplay() {
    return (
        <EventPage
            title="Championship Flight"
            course="Nya Banan"
            time="Søndag: 12:03"
        >
            <article className="prose max-w-xl mx-auto my-10 ">
                <h3>Format: Strokeplay ⛳️</h3>
                <p>Flight bestemmes av poeng fra runde 1-3. Om likt i antall poeng vil plass avgjøres basert på en tilleggskonkurranse (eventuelt laveste HCP)</p>

                <ul>
                    <li>Taperflighten først ut</li>
                    <li>1 strategisk Mulligan per spiller (Gjelder kun front 9)</li>
                    <li>Maksslag pr hull: Par * 2 + 2</li>
                    <li>
                        <p><strong>Back 9</strong></p>
                        <p>Om det er endret status i lavest antall slag, så er det shuffle mellom flights basert på topp 4 og lavest 4. </p>
                    </li>
                </ul>

                <p className="text-amber-300">Spilleren med lavest antall slag etter 18 hull på Nya Banan, er vinner av Gutta Open 2024</p>

                <h3>Bonusslag</h3>

                <p>
                    Seiere i tidligere runder belønnes med 1 bonusslag
                </p>

                <h4>Samlet plassering fra tidligere runder  </h4>
                <table className="table table-zebra table-lg">
                    <thead>
                        <tr>
                            <th>Plassering</th>
                            <th>Bonusslag</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>8</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>6</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>4</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Handicap</h4>
                <table className="table table-zebra table-lg">
                    <thead>
                        <tr>
                            <th>HCP</th>
                            <th>Bonusslag</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Over 20</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Over 22</th>
                            <td>4</td>
                        </tr>
                        <tr>
                            <th>Over 24</th>
                            <td>6</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </EventPage>
    )
};