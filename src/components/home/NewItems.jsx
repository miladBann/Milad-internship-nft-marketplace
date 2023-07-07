import React, {useState, useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./NewItems.css";
import Skeliton from "./Skeliton.jsx";
import NewItemsCard from "./NewItemsCard";
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewItems = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNewItems()
  {
    const response = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems");
    setItems(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNewItems();
    AOS.init();
  }, [])

  const PrevButton = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        Previous
      </button>
    );
  };
  
  const NextButton = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        Next
      </button>
    );
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    //continue by looping over each item and showing it to the user
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="zoom-in" data-aos-duration="1000">New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        
          {
            loading ? (
              <>
                {
                  new Array(4).fill(0).map((_, index) => {
                    return (
                      <Skeliton />
                    )
                  }) 
                }
              </>
            ) : (
              <>
                <Slider {...settings}>
                  {
                    items.map((item, index) => {
                      return (
                        <NewItemsCard item={item} key={index}/>
                      )
                    })
                  }
                </Slider>
              </>
            )
          }

        </div>
      </div>
    </section>
  );
};

export default NewItems;
