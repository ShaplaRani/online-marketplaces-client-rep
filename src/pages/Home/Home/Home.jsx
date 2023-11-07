import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FindWork from "../FindWork/FindWork";
import Service from "../Service/Service";


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
        </div>
    );
};

export default Home;