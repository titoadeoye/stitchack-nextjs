import Image from 'next/image';
import { About as Wrapper } from './About.style';

export default function About() {
    return (
        <Wrapper>
            <div>
                <h2>About us</h2>
                <p>
                    Stitchack is a solution developed to give tailors a more reliable way to 
                    store customer data, organize tasks and orders and increase productivity in an efficient way.
                </p>
                <p>Your data is backed up on the cloud and revenue reports can be generated.</p>
                <p>What we are offering is efficiency with convenience.</p>
                <a href="#about">Click here to read more </a>
            </div>
            <Image src="/assets/man.jpg" alt="about-us" width={400} height={400} />
            
        </Wrapper>
    )
}