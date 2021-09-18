import MotionHoc from "./MotionHoc";
import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    text-align: center;
    color: white;
`;

const ImageContainer = styled.div`
    width: 100%;
    text-align: center;
    color: white;
  \
`;

const ImageBox = styled.div`
    width: 200px;
    height: 200px;
    margin: 15px;
    display: inline-block;

    @media (max-width: 1000px) {
      width: 150px;
      height: 150px;
      display: block;
    }
    @media (max-width: 1000px) {
      width: 100px;
      height: 100px;
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 40px 50px, rgba(0, 0, 0, 0.22) 0px 20px 20px;
      
    }
    img:hover {
      transform: scale(1.1);
      transition: transform .4s;
  }
`;

const DiscographyComponent = () => {
  return <Section>
            <h1>Albums</h1>
            <ImageContainer>
              <a href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'>
              <ImageBox>
                  <img src='../images/skov1.png' alt='skov album' /> 
                </ImageBox>
              </a>
              <a href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'>
              <ImageBox>
                  <img src='../images/skovalbum2.png' alt='skov album' /> 
                </ImageBox>
              </a>
              <a href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'>
              <ImageBox>
                  <img src='../images/skov3.png' alt='skov album' /> 
                </ImageBox>
              </a>
              <a href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'>
              <ImageBox>
                  <img src='../images/skov4.png' alt='skov album' /> 
                </ImageBox>
              </a>  
            </ImageContainer>

        </Section>;
};

const Discography = MotionHoc(DiscographyComponent);

export default Discography;
