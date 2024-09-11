import EventPage from "../components/EventPage";


export default function Scramble() {
    return (
        <EventPage
            title="Stableford"
            course="Gamlebanen"
            time="Lørdag: 10:00"
        >
            <article className="prose max-w-xl mx-auto my-10 ">
                <p>Individuelt spill. Poeng basert på Stableford med HCP</p>
                <p><strong>Tilleggskonkurranser</strong></p>
                <ul>
                    <li>
                        <p><strong>Lone Wolf</strong></p>
                        <p>
                        Alle har 1 mulighet til å melde «Lone Wolf». 
                        Dette må gjøres før noen har tatt utslag. Om mann får bedre score enn de andre på flighten så dobles stablefordpoengene gitt på det hullet.
                        Taper man eller spiller likt, scores ingen poeng.
                        </p>
                    </li>
                    <li>
                        <p>Longest Drive hull 1</p>
                    </li>
                    <li>
                        <p>
                            Closest to pin hull 12
                        </p>
                    </li>
                </ul>
            </article>
        </EventPage>
    )
};