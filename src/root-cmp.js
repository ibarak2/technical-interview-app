import { Routes, Route } from "react-router"
import { Home } from "./pages/home"

import "./assets/styles/main.scss"





export function RootCmp() {
    return (
        <div>
            <main>
                <Routes>
                    <Route
                        key='/'
                        element={<Home />}
                        path='/'
                    />
                </Routes>
            </main>
        </div>
    )
}