import PageBody from "~/components/PageBody";
import { HallOfFameEntry } from "~/types/hof";

import HallfOfFameCard from "~/components/HallOfFameCard";

import winner2024img from '~/images/winner-2024.png';
import winner2023Img from "~/images/champion-2.jpg";
import winner2022 from "~/images/winner-2022.png";
import winner2021 from "~/images/winner-2021.jpg";

const hallOfFame : HallOfFameEntry[] = [
    {
        year: "2024",
        location: "Öijared Golfklubb",
        img: winner2024img,
        winner: "Frank-louis Prillard",
        second: "Sander Rivø Aslesen",
        third: "Andreas Rivø Aslesen / Jens Marius Kjærnsli",
        scoreboard: {
            name: "Nya Banan",
            courseHandicap: 72,
            playerScores: [
                {
                    name: "Frank-louis Prillard",
                    gross: 15,
                    net: 8,
                },
                {
                    name: "Sander Rivø Aslesen",
                    gross: 17,
                    net: 9,
                },
                {
                    name: "Jens Marius Kjærnsli",
                    gross: 18,
                    net: 14,
                },
                {
                    name: "Morten Andreas Høglend",
                    gross: 22,
                    net: 20,
                },
                {
                    name: "Bjørn Runge",
                    gross: 26,
                    net: 26,
                },
                {
                    name: "Andreas Rivø Aslesen",
                    gross: 29,
                    net: 14,
                },
                {
                    name: "Fredrik Zander Kloster",
                    gross: 34,
                    net: 18,
                },
                {
                    name: "Pål Nistad",
                    gross: 35,
                    net: 24,
                },
            ]
        }
    },
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
        winner: "Jens Marius Kjærnsli",
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