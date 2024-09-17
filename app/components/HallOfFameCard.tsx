import { useState } from "react";
import { HallOfFameEntry, PlayerScore } from "~/types/hof";


type props = {
    entry: HallOfFameEntry;
}

enum SortState {
    GROSS,
    NET,
    BONUS,
    PLAYER_NAME
}

const HallfOfFameCard = ({ entry }: props) => {
    const [sortState, setSortState] = useState<SortState>(SortState.NET);
    const modalID = `scoreboard-${entry.year}-modal`;

    const openModal = () => {
        var modal = document.getElementById(modalID) as HTMLDialogElement;
        if (modal)
            modal.showModal();
    }

    const calculateBonusStrokes = (score: PlayerScore) => {
        if (!entry.scoreboard)
            return 0;

        return Math.max(score.gross - score.net, 0);
    }

    const sortScores = (state: SortState): PlayerScore[] => {
        if (!entry.scoreboard)
            return [];

        switch (state) {
            case SortState.GROSS:
                return entry.scoreboard.playerScores.sort((a, b) => a.gross - b.gross);
            case SortState.NET:
                return entry.scoreboard.playerScores.sort((a, b) => a.net - b.net);
            case SortState.BONUS:
                return entry.scoreboard.playerScores.sort((a, b) => calculateBonusStrokes(b) - calculateBonusStrokes(a));
            case SortState.PLAYER_NAME:
                return entry.scoreboard.playerScores.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    const sortedScores = sortScores(sortState);

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
                {entry.scoreboard && (
                    <div className="card-actions justify-end">
                        <button
                            onClick={openModal}
                            className="btn btn-primary">
                            Scoreboard
                        </button>
                    </div>
                )}
            </div>
            {entry.scoreboard && sortedScores && (
                <dialog id={modalID} className="modal">
                    <div className="modal-box">
                        <div className="mb-6">
                            <h3 className="font-bold text-lg">Scoreboard</h3>
                            <ul>
                                <li>
                                    {entry.scoreboard.name}
                                </li>
                                <li>
                                    Handicap: {entry.scoreboard.courseHandicap}
                                </li>
                            </ul>
                        </div>
                        <table className="table w-full table-zebra">
                            <thead>
                                <tr>
                                    <th>
                                        <button
                                            className="btn btn-ghost btn-sm"
                                            onClick={() => setSortState(SortState.PLAYER_NAME)}
                                        >
                                            Player
                                        </button>
                                    </th>
                                    <th>
                                        <button
                                            className="btn btn-ghost btn-sm"
                                            onClick={() => setSortState(SortState.NET)}
                                        >
                                            Net
                                        </button>
                                    </th>
                                    <th>
                                        <button
                                            className="btn btn-ghost btn-sm"
                                            onClick={() => setSortState(SortState.GROSS)}
                                        >
                                            Gross
                                        </button>
                                    </th>
                                    <th>
                                        <button
                                            className="btn btn-ghost btn-sm"
                                            onClick={() => setSortState(SortState.BONUS)}
                                        >
                                            Bonus strokes
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedScores.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player.name}</td>
                                        <td className="text-center">{player.net}</td>
                                        <td className="text-center">{player.gross}</td>
                                        <td className="text-center">{calculateBonusStrokes(player)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    )
}

export default HallfOfFameCard;