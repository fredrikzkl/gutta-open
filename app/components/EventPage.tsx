import { useNavigate } from "@remix-run/react";
import Header from "../components/Header";

type props = {
    title: string;
    course: string;
    time: string;
    children?: React.ReactNode;
}

const EventPage = ({title, course, time, children} : props) => {
    const navigate = useNavigate();
    return (
        <div className="p-6">
            <Header />
            <div className="text-center p-10 sm:p-2 mb-2">
                <h2 className="text-3xl mb-1">{title}</h2>
                <div className="badge badge-primary badge-outline mr-1">{course}</div>
                <div className="badge badge-secondary badge-outline">{time}</div>
            </div>
            {children}
            <div className="text-center">
                <button className="btn btn-primary" onClick={() => navigate('/')}>Tilbake</button>
            </div>
        </div>
    )
}

export default EventPage;