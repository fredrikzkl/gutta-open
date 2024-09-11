import EventCard from "./EventCard"
import breakfastImg from "../images/frokost.jpg";
import dinnerImg from "../images/dinner.jpg";
import { useNavigate } from "@remix-run/react";


import spiseMiddag from '../images/spise-1.jpg';

import fyllagolfImg from "../images/fyllagolf.jpg";
import stablefordImg from '../images/stableford.jpg';
import scrambleImg from '../images/scramble.jpg'
import championImg from '../images/champion.jpg'

export const FridayProgram = () => {
    const navigate = useNavigate();

    return (
        <div>
            <EventCard
                title="Scramble"
                imgSrc={scrambleImg}
                course="Parkbanan"
                time="13:36"
            >
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigate("/scramble")}
                        className="btn btn-primary">
                        Les mer
                    </button>
                </div>
            </EventCard>

            <EventCard
                title="Hamburgere"
                imgSrc={spiseMiddag}
                time="20:00"
            />
        </div>
    )
}

export const SaturdayProgram = () => {
    const navigate = useNavigate();

    return (
        <div>
            <EventCard
                title="Frokost"
                imgSrc={breakfastImg}
                time="07:00-10:30"
            />

            <EventCard
                title="Stableford"
                imgSrc={stablefordImg}
                course="Gamlebanen"
                time="10:00"
            >
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigate("/stableford")}
                        className="btn btn-primary">
                        Les mer
                    </button>
                </div>
            </EventCard>
            <EventCard
                title="Fyllagolf 🍺"
                imgSrc={fyllagolfImg}
                course="Multibanan"
                time="17:29"
            >
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigate("/fylla")}
                        className="btn btn-primary">
                        Les mer
                    </button>
                </div>
            </EventCard>
            <EventCard
                title="Middag"
                imgSrc={dinnerImg}
                time="19:00"
            />
        </div>
    )
}

export const SundayProgram = () => {
    const navigate = useNavigate();
    return (
        <div>
            <EventCard
                title="Frokost"
                imgSrc={breakfastImg}
                time="07:00-10:30"
            />
            <EventCard
                title="Championship Flight 🏆"
                imgSrc={championImg}
                course="Nya Banan"
                time="12:03"

            >
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigate("/championflight")}
                        className="btn btn-primary">
                        Les mer
                    </button>
                </div>
            </EventCard>
        </div>
    )
}