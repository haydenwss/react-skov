import MotionHoc from "./MotionHoc";
import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    text-align: center;
    color: white;

    a {
      color: white;
      margin: 10px;
      text-decoration: none;
    }
    @media (max-width: 1000px) {
      font-size: 12px;
    }

`;

const ContactComponent = () => {
  return  <Section>
            <h1>Contact</h1>
            <p><a href="mailto:chriseriksen@hotmail.com">chriseriksen@hotmail.com</a></p>
            <p><a href='facebook.com/Skov.music'>facebook.com/Skov.music</a></p>
            <p> instagram | <a href='https://www.instagram.com/chriseriksenmusic/?hl=en'>@chriseriksenmusic</a></p>
          </Section>;
};

const Contact = MotionHoc(ContactComponent);

export default Contact;
