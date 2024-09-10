
type props = {
    title: string;
    imgSrc: string;
    actionBtn?: JSX.IntrinsicElements;
    children: React.ReactNode;
}

const EventCard = ({ title, imgSrc, actionBtn, children }: props) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto mb-6">
            <figure>
                <img
                    src={imgSrc}
                    alt={`${title}-img`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {children}
                {/*
            <ul>
            <li>To per lag</li>
            <li>Lag basert på handicap (nærmeste sammen)</li>
            <li>HCP= Gjennomsnittlig handicap x 0,65. Sjekk slope for tildelte slag</li>
            <li>Plusspoeng for hvert slag under eget par.</li>
            <li>Minuspoeng over. </li>
          </ul>
          <p>En tvungen reverse scramble i løpet av runden (taktisk valg av hull)</p>
          */}
              
            </div>
        </div>
    )
}

export default EventCard;