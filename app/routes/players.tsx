import { useState } from "react";
import PageBody from "~/components/PageBody";

import { Player } from "~/types/player";

const players: Player[] = [
    {
        name: "Frank Louis Prillard",
        hcp: 17.2
    },
    {
        name: "Morten Andreas Høglend",
        hcp: 20.2
    },
    {
        name: "Sander Rivø Aslesen",
        hcp: 15.8
    },
    {
        name: "Bjørn Runge",
        hcp: 17.2
    },
    {
        name: "Andreas Aslesen",
        hcp: 14.9
    },
    {
        name: "Jens Marius Kjærnsli",
        hcp: 14
    },
    {
        name: "Pål Nistad",
        hcp: 24
    },
    {
        name: "Fredrik Kloster",
        hcp: 29
    }
]

enum SORT_ORDER {
    NAME_ASC, NAME_DESC, HCP_ASC, HCP_DESC, RANDOM
}

export default function Players() {
    const [sortOrder, setSortOrder] = useState<SORT_ORDER>(SORT_ORDER.HCP_ASC);

    const sortedPlayers = players.sort((a, b) => {
        switch (sortOrder) {
            case SORT_ORDER.NAME_ASC:
                return a.name.localeCompare(b.name);
            case SORT_ORDER.NAME_DESC:
                return b.name.localeCompare(a.name);
            case SORT_ORDER.HCP_ASC:
                return a.hcp - b.hcp;
            case SORT_ORDER.HCP_DESC:
                return b.hcp - a.hcp;
            case SORT_ORDER.RANDOM:
                return Math.random() - 0.5;
        }
    });

    const updateNameSortOrder = () => {
        if (sortOrder === SORT_ORDER.NAME_ASC)
            setSortOrder(SORT_ORDER.NAME_DESC);
        else
            setSortOrder(SORT_ORDER.NAME_ASC);
    }

    const updateHCPSortOrder = () => {
        if (sortOrder === SORT_ORDER.HCP_ASC)
            setSortOrder(SORT_ORDER.HCP_DESC);
        else
            setSortOrder(SORT_ORDER.HCP_ASC);
    }

    const sortRandom = () => {
        setSortOrder(SORT_ORDER.RANDOM);
    }

    return (
        <PageBody title={"Spillere"} >
            <table className="table table-zebra table-lg mb-10">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>
                            <button className="btn btn-ghost" onClick={() => updateNameSortOrder()}>Navn</button>
                        </th>
                        <th>
                            <button className="btn btn-ghost" onClick={() => updateHCPSortOrder()}>HCP</button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {sortedPlayers.map((player, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{player.name}</td>
                            <td>{player.hcp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center mb-8">
                <button className="btn btn-active btn-accent" onClick={sortRandom}>
                    Random
                </button>
            </div>

        </PageBody>
    )
};