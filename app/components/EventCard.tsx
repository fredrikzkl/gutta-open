import { useState } from "react";

type props = {
    title: string;
    imgSrc: string;
    time?: string;
    course?: string;
    children?: React.ReactNode;
}

const EventCard = ({ title, imgSrc, time, course, children }: props) => {
    const [opacityValue, setOpacityValue] = useState("opacity-0");
    const fadeIn = "transition-opacity duration-500 ease-in";

    setTimeout(() => {
        setOpacityValue("opacity-100");
    }, 25);

    return (
        <div className={`card bg-base-100 max-w-96 shadow-xl mx-auto mb-6 ${fadeIn} ${opacityValue}`}>
            <figure className="min-h-52">
                <img
                    src={imgSrc}
                    alt={`${title}-img`}
                    className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                />
            </figure>
            <div className="card-body">
                <h3>{time}</h3>
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="prose">
                    {course && 
                        <div className="badge badge-accent badge-outline">{course}</div>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}

export default EventCard;