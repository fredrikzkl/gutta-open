
type props = {
    title: string;
    imgSrc: string;
    time?: string;
    course?: string;
    children?: React.ReactNode;
}

const EventCard = ({ title, imgSrc, time, course, children }: props) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto mb-6">
            <figure>
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