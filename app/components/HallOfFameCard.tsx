import { HallOfFameEntry } from "~/types/hof";


type props = {
    entry: HallOfFameEntry;
}

const HallfOfFameCard = ({ entry }: props) => {
    return (
        <div className="card bg-base-100 max-w-96 shadow-xl mx-auto mb-6">
            {entry.img && (
                <figure className="min-h-52">
                    <img
                        src={entry.img}
                        alt={`${entry.location}-img`}
                        className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    />
                </figure>
            )}

            <div className="card-body">
                <h2 className="card-title">
                    {entry.year} - {entry.location} 
                </h2>
                <div className="prose">
                    <h4 className="text-amber-300">1. {entry.winner}</h4>
                    {entry.second && <h4 className="text-cyan-100">2. {entry.second}</h4>}
                    {entry.third && <h4 className="text-amber-600">3. {entry.third}</h4>}
                </div>
            </div>
        </div>
    )
}

export default HallfOfFameCard;