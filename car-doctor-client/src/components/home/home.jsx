
import Banner from "../shared/banner";

import About from "./About/about";
import Features from "./Features/features";
import Services from "./Services/services";
import Team from "./Team/team";
import Badge from "./badge";

const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Badge></Badge>

            <Team></Team>
            <Features></Features>


        </div>
    );
};

export default Home;