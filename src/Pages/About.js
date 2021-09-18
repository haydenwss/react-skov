import MotionHoc from "./MotionHoc";
import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    color: white;
    text-align: center;
    padding: 20%;
`;

const Paragraph = styled.div`
    width: 100%;
    color: white;
    @media (max-width: 1000px) {
      font-size: 10px;
      padding: 10%;
    }
`;


const AboutComponent = () => {
  return <Section>
  <h1>About</h1>
  <Paragraph>
  ”Skov.” is the solo project Chris Eriksen has been long waiting to release. From his childhood love of Blues and Rock, to his new found admiration for electronic/R&B, Chris's new music stems from a different place than his other groups.
  </Paragraph>
  <br></br>
  <Paragraph>
  Chris is a staple in the Victoria music scene, playing with the likes of both Mad Mona and Trophy Dad, as well as playing in the local cover music secene. With a vast variety of sounds and artists playing with Chris, Skov. is able to create a sound similar to the Black keys, Arctic Monkeys, Nathaniel Rateliff and more, while still maintaining a unique sound with experimental backing vocals, with lots of instrumental layers of synth and piano to be explored as you listen to the music, over and over again.
  </Paragraph>
</Section>
  ;
};

const About = MotionHoc(AboutComponent);

export default About;
