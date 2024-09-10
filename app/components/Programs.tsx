import EventCard from "./EventCard"
import hamburgerImg from "../images/hamburger.png";
import breakfastImg from "../images/breakfast.png";
import dinnerImg from "../images/dinner.png";
import fyllagolfImg from "../images/fyllagolf.jpg";

export const FridayProgram = () => {
    return (
        <div>
            <EventCard
                title="Parkbanan"
                imgSrc="https://www.oijared.se/wp-content/uploads/2022/12/Kristihimmelfardspaket_puff_2020.jpg"
            >
                <>
                    <h3>18 hull</h3>
                    <h3>13:36</h3>
                    <h3>Scramble</h3>
                </>
            </EventCard>

            <EventCard
                title="Hamburgere"
                imgSrc={hamburgerImg}
            >
                <h3>20:00</h3>
            </EventCard>
        </div>
    )
}

export const SaturdayProgram = () => (
    <div>
        <EventCard
            title="Frokost"
            imgSrc={breakfastImg}
        >
            <>
                <h3>07:00-10:30</h3>
            </>
        </EventCard>

        <EventCard
            title="Gamla Banan"
            imgSrc={"https://www.oijared.se/wp-content/uploads/2023/03/exempelbilder-4-scaled.jpg"}
        >
            <>
                <h3>10:00</h3>
            </>
        </EventCard>
        <EventCard
            title="Fyllagolf 🍺 (Multibanan)"
            imgSrc={fyllagolfImg}
        >
            <>
                <h3>17:29</h3>
            </>
        </EventCard>
        <EventCard
            title="Middag"
            imgSrc={dinnerImg}
        >
            <h3>19:00</h3>
        </EventCard>
    </div>
)

export const SundayProgram = () => (
    <div>
        <EventCard
            title="Frokost"
            imgSrc={breakfastImg}
        >
            <>
                <h3>07:00-10:30</h3>
            </>
        </EventCard>

        <EventCard
            title="Nya Banan"
            imgSrc={"https://www.oijared.se/wp-content/uploads/2022/12/Golf.varagolfbanor_slide.jpg"}
        >
            <h3>12:03</h3>
        </EventCard>
    </div>
)