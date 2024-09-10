import { useNavigate } from "@remix-run/react";

export default function Header() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    }
    return (
        <div onClick={onClick} className="text-center p-10 sm:p-2 mb-2">
            <h1 className="text-5xl">Gutta Open 2024 🏆</h1>
        </div>
    )
}