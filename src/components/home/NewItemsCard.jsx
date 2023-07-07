import { Link } from "react-router-dom";
import CountDownTimer from "./CountDownTimer";
import "./NewItems.css"


function NewItemsCard({item})
{
    return (
        <div data-aos="zoom-in" data-aos-duration="700">
        <div className="nft__item">
        <div className="author_list_pp">
            <Link
            to={`/author/${item.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
            >
            <img className="lazy" src={item.authorImage} alt="" />
            <i className="fa fa-check"></i>
            </Link>
        </div>
        <CountDownTimer startTime={item.expiryDate}/>

        <div className="nft__item_wrap">
                <div className="nft__item_extra">
                <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="l" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="l" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="l">
                        <i className="fa fa-envelope fa-lg"></i>
                    </a>
                    </div>
                </div>
                </div>

                <Link to={`/item-details/${item.nftId}`}>
                <img
                    src={item.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                />
                </Link>
            </div>
            <div className="nft__item_info">
                <Link to={`/item-details/${item.nftId}`}>
                <h4>{item.title}</h4>
                </Link>
                <div className="nft__item_price">{item.price} ETH</div>
                <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{item.likes}</span>
                </div>
            </div>
            </div>
        </div>
    );
}


export default NewItemsCard;