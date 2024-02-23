import Image from "next/image";
import { Button } from "./Hero.style";
import NavBar from "@/components/NavBar";
import "./hero.css";

export default function Hero() {
  return (
    <div id="home">
      <div style={{ background: "#141414" }}>
        <NavBar />
        <section>
          <div className="home-content">
            <div className="text">
              <h1>Let us assist you in stress-free customer management</h1>
              <p>
                We will assist you in keeping track of your customer's
                measurements , details, and styles so that you can readily
                access them from any location at any time.
              </p>
              <Button href="register">Get started</Button>
            </div>
            <Image
              className="landing"
              src="/assets/bg.png"
              alt="landing"
              width="400"
              height="400"
            />
          </div>

          <div class="curve"></div>
        </section>
      </div>
    </div>
  );
}
