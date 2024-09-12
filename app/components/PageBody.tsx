import { useNavigate } from "@remix-run/react";
import Header from "./Header";

type props = {
    title?: string;
    course?: string;
    time?: string;
    children?: React.ReactNode;
}

const PageBody = ({ title, course, time, children }: props) => {
    const navigate = useNavigate();

    const isIndex = title === "";

    return (
        <div className="p-6 mb-6 max-w-xl mx-auto">
            <Header />
            <div className="divider mt-8 mb-8" />

            {title && (
                <div className="text-center p-10 sm:p-2 mb-2">
                    <h2 className="text-3xl mb-1">{title}</h2>
                    {course && (
                        <div className="badge badge-primary badge-outline mr-1">{course}</div>
                    )}
                    {time && (
                        <div className="badge badge-secondary badge-outline">{time}</div>
                    )}
                </div>
            )}

            {children}
            {!isIndex && (
                <div className="text-center">
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Tilbake</button>
                </div>
            )}
        </div>
    )
}

export default PageBody;