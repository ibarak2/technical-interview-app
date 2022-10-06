import { AppHeader } from "../cmps/app-header"
import { Welcome } from "../cmps/welcome"
import { Interests } from "../cmps/interests"
import { Reviews } from "../cmps/reviews"
import { ContactUs } from "../cmps/contact-us"
import { AppFooter } from "../cmps/app-footer"


export const Home = () => {


    return (
        <main className="main-container">
            <div className="home">
                <AppHeader />
                <Welcome />
                {/* <Interests /> */}
                <Reviews />
                {/* <ContactUs /> */}
                {/* <AppFooter /> */}
            </div>
        </main>
    )
}