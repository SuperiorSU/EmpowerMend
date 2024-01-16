import OurServices from "../component/OurServices";
import ChangingCard from "../component/ChangingCard";


function Service(){
    return(
        <div>
            <OurServices/>
            <div className="spacer"></div>
            <ChangingCard />
            <div className="spacer"></div>
            
        </div>
    )
}



export default Service;