import AboutTop from "../component/AboutUs"
import FAQ from "../component/FAQ"

function About(){
    return(
        <div>
            <AboutTop/>
            <div className="spacer"></div>
            <FAQ/>
            <div className="spacer"></div>
        </div>
    )
}



export default About