import {Card, Deals, Carousel, CarouselProduct} from '../components'
//Images
import grid1 from "../assets/images/home_grid_1.jpg";
import grid2 from "../assets/images/home_grid_2.jpg";
import grid3 from "../assets/images/home_grid_3.jpg";
import grid4 from "../assets/images/home_grid_4.jpg";
import grid5 from "../assets/images/home_grid_5.jpg";
import grid6 from "../assets/images/home_grid_6.jpg";
import grid7 from "../assets/images/home_grid_7.jpg";
import grid8 from "../assets/images/home_grid_8.jpg";

const HomePage = () => {
  return (
    <div className="min-w-[1000px] max-w-[1500px] m-auto">
      <Carousel />
      <div className="grid grid-cols-3 xl:grid-cols-4 mx-2 -mt-[330px]">
        <Card
          title={"We have a surprise for you"}
          img={grid1}
          link={"See terms and conditions"}
        />
        <Card
          title={"Watch The Rings of Power"}
          img={grid2}
          link={"Start streaming now"}
        />
        <Card
          title={"Unlimited Streaming"}
          img={grid3}
          link={"Find out more"}
        />
        <Card
          title={"More titles to explore"}
          img={grid4}
          link={"Browse Kindle Unlimited"}
        />
        <Card title={"Shop Pet Supplies"} img={grid5} link={"See more"} />
        <Card title={"Spring Sale"} img={grid6} link={"See the deals"} />
        <Card title={"Echo Buds"} img={grid7} link={"See more"} />
        <Card
          title={"Family Plan: 3 months free"}
          img={grid8}
          link={"Learn more"}
        />
      </div>
      <Deals />
      <CarouselProduct />
    </div>
  );
};

export default HomePage;
