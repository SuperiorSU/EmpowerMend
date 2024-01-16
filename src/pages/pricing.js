import Plan from "../component/PricingCard"
import FAQ from "../component/FAQ"

function Pricing(){
    return(
        <div>
            <br/>
            <br/>
            <h2 className="text-black font-bold mt-5 fs-1 text-center p-4">Our Price Plan</h2>
            {/* <div className="spacer"></div> */}
            <Plan/>
            <div className="spacer"></div>
            <FAQ />
            <div className="spacer"></div>
        </div>
    )
}



export default Pricing