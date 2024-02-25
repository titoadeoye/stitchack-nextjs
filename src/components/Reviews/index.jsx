import Image from "next/image";
import { Reviews as Wrapper } from "./Reviews.style.js";

export default function Reviews() {
  return (
    <Wrapper>
      <h2>Reviews</h2>
      <div className="reviews">
        <div className="review">
          <Image
            src="/assets/reviewer1.png"
            alt="reviewer"
            width={80}
            height={80}
          />
          <h3>Daniel Johnson</h3>
          <p>Ready to wear</p>
          <p>"Stitchack is an amazing platform for tailors"</p>
        </div>

        <div className="review">
          <Image
            src="/assets/reviewer2.png"
            alt="reviewer"
            width={80}
            height={80}
          />
          <h3>Samuel Paul</h3>
          <p>Fashion designer</p>
          <p>
            "Stitchack has really helped me manage my time and customers record."
          </p>
        </div>

        <div className="review">
          <Image
            src="/assets/reviewer3.png"
            alt="reviewer"
            width={80}
            height={80}
          />
          <h3>Alisha Freeman</h3>
          <p>Fashion designer</p>
          <p>"I love this site and would totally recommend"</p>
        </div>
      </div>
      {/* <div className="scroll">
                <a href="#home">Scroll to top</a>
            </div> */}
    </Wrapper>
  );
}
