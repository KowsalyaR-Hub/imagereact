import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";
import seven from "../assets/images/7.png";
import eight from "../assets/images/8.png";


function Image() {
    return (
        <div className="image-container">

            <div className="image-item">
                <img src={one} alt="Dog" />
                <p>The Happy Dog</p>
            </div>
            <div className="image-item">
                <img src={two} alt="Dog" />
                <p>The Innocent Dog</p>
            </div>
            <div className="image-item">
                <img src={three} alt="Dog" />
                <p>The Two Puppies</p>
            </div>
            <div className="image-item">
                <img src={four} alt="Dog" />
                <p>The Happy Dog</p>
            </div>
            <div className="image-item">
                <img src={five} alt="Dog" />
                <p>Big Eyed Buggy</p>
            </div>
            <div className="image-item">
                <img src={six} alt="Dog" />
                <p>The Shit Su</p>
            </div>
            <div className="image-item">
                <img src={seven} alt="Dog" />
                <p>The Innocent Dog</p>
            </div>
            <div className="image-item">
                <img src={eight} alt="Dog" />
                <p>The Cute Look Dog</p>
            </div>

        </div>
    )
}

export default Image