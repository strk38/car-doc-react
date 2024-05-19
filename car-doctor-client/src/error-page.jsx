import { useRouteError } from "react-router-dom";
import Navbar_main from "./components/shared/navbar_main";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar_main></Navbar_main>
            <div id="error-page" className="py-16 text-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}