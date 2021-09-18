import MotionHoc from "./MotionHoc";
import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    color: white;
    text-align: center;

`;

const SocialLinkBox = styled.div`
    width: 40px;
    height: auto;
    display: inline-block;
    margin: 05px;
    color: white;
    text-decoration: none;

    :hover {
      transform: scale(1.4);
      transition: transform .4s;
    }

    a {
      color: white;
    }
`;

const HomeComponent = () => {
  return  <Section>
            <h1>Skov.</h1>
            <SocialLinkBox>
            <a href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'>
              <i className="fab fa-spotify fa-2x"></i>
            </a>
            </SocialLinkBox>
            <SocialLinkBox>
            <a href='https://music.apple.com/ca/artist/skov/1501059364?uo=4&app=music'>
              <i className="fab fa-apple fa-2x"></i>
            </a>
            </SocialLinkBox>
            <SocialLinkBox>
            <a href='https://www.facebook.com/Skov.music/'>
              <i className="fab fa-facebook fa-2x"></i>
            </a>   
            </SocialLinkBox>
            <SocialLinkBox>
            <a href='https://www.instagram.com/chriseriksenmusic/?hl=en'>
              <i className="fab fa-instagram fa-2x"></i>
            </a>  
            </SocialLinkBox>
          </Section>;
};

const Home = MotionHoc(HomeComponent);

export default Home;
