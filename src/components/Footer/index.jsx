import Image from "next/image";
import { Wrapper, LogoWrap, Copyrights, Text } from "./Footer.style";

export default function Footer() {
  return (
    <Wrapper>
      <div className="box mask">
        <Text>
          <LogoWrap>
            <Image src="/assets/logo.png" alt="logo" width={80} height={40} />
            <div className="socials">
              <Image
                src="/assets/svg/twitter.svg"
                alt="twitter"
                width={10}
                height={10}
              />
              <Image
                src="/assets/svg/instagram.svg"
                alt="instagram"
                width={10}
                height={10}
              />
              <Image
                src="/assets/svg/facebook.svg"
                alt="facebook"
                width={10}
                height={10}
              />
              <Image
                src="/assets/svg/linkedin.svg"
                alt="linkedin"
                width={10}
                height={10}
              />
              <Image
                src="/assets/svg/email.svg"
                alt="email"
                width={10}
                height={10}
              />
            </div>
          </LogoWrap>

          <Copyrights>
            <p>@{new Date().getFullYear()} Stitchack | </p>
            <p>All rights reserved</p>
          </Copyrights>
        </Text>
      </div>
    </Wrapper>
  );
}
