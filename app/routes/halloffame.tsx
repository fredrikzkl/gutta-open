import PageBody from "~/components/PageBody";
import { HallOfFameEntry } from "~/types/hof";

import HallfOfFameCard from "~/components/HallOfFameCard";

import winner2023Img from "~/images/champion-2.jpg";
import winner2022 from "~/images/winner-2022.png";
import winner2021 from "~/images/winner-2021.jpg";

const hallOfFame : HallOfFameEntry[] = [
    {
        year: "2023",
        location: "Eda Golfklubb",
        img: winner2023Img,
        winner: "Morten Andreas Høglend",
        second: "Frank-louis Prillard",
        third: "Fredrik Zander Kloster"
    },
    {
        year: "2022",
        location: "Eda Golfklubb",
        img: winner2022,
        winner: "Simen Andreas Kjærnsli ",
    },
    {
        year: "2021",
        location: "Larkollen",
        img: winner2021,
        winner: "Marius Kjærnsli",
        second: "Morten Andreas Høglend",
        third: "Tor Christian Tofte"
    }
];

export default function HallOfFame() {
    return (
        <PageBody title="Hall of Fame">
            <div className="mt-10">
                {hallOfFame.map((entry, index) => (
                    <HallfOfFameCard key={index} entry={entry} />
                ))}
            </div>
        </PageBody>
    )
}