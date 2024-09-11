import EventCard from "./EventCard"
import hamburgerImg from "../images/hamburger.png";
import breakfastImg from "../images/breakfast.png";
import dinnerImg from "../images/dinner.jpg";
import fyllagolfImg from "../images/fyllagolf.jpg";
import { useNavigate } from "@remix-run/react";

export const FridayProgram = () => {
    return (
        <div>
            <EventCard
                title="Scramble"
                imgSrc="https://www.oijared.se/wp-content/uploads/2022/12/Kristihimmelfardspaket_puff_2020.jpg"
                course="Parkbanan"
                time="13:36"
            >
                <div className="card-actions justify-end">
                    <button 
                        onClick={() => console.log("Les mer")}
                        className="btn btn-primary">
                            Les mer
                    </button>
                </div>
            </EventCard>

            <EventCard
                title="Hamburgere"
                imgSrc={hamburgerImg}
                time="20:00"
            />
        </div>
    )
}

export const SaturdayProgram = () => {
    const navigate = useNavigate();

    const fyllaGolfOnClick =() => {
        navigate("/fylla");
    }
    return(
    <div>
        <EventCard
            title="Frokost"
            imgSrc={breakfastImg}
            time="07:00-10:30"
        />

        <EventCard
            title="Stableford"
            imgSrc={"https://www.oijared.se/wp-content/uploads/2023/03/exempelbilder-4-scaled.jpg"}
            course="Gamlebanen"
            time="10:00"
        >
        </EventCard>
        <EventCard
            title="Fyllagolf 🍺"
            imgSrc={fyllagolfImg}
            course="Multibanan"
            time="17:29"
        >
            <>
                <div className="card-actions justify-end">
                    <button 
                        onClick={fyllaGolfOnClick}
                        className="btn btn-primary">
                            Les mer
                    </button>
                </div>
            </>
        </EventCard>
        <EventCard
            title="Middag"
            imgSrc={dinnerImg}
            time="19:00"
        />
    </div>
    )
}

export const SundayProgram = () => (
    <div>
        <EventCard
            title="Frokost"
            imgSrc={breakfastImg}
            time="07:00-10:30"
        />
        <EventCard
            title="Strokeplay"
            imgSrc={"https://www.oijared.se/wp-content/uploads/2022/12/Golf.varagolfbanor_slide.jpg"}
            course="Nya Banan"
            time="12:03"
        />
    </div>
)