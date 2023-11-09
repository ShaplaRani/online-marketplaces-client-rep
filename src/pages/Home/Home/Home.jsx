import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FindWork from "../FindWork/FindWork";
import Service from "../Service/Service";
import Talent from "../Talent/Talent";
import Help from "../Help/Help";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bid Jobs | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <FindWork></FindWork>
            <Help></Help>
            <Talent></Talent>
        </div>
    );
};

export default Home;