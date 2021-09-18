import MotionHoc from "./MotionHoc";
import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    color: #333;
    font-family: sans-serif;
    line-height: 1.5;
    z-index: -1;
    padding: 10px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgb(209, 215, 230, 0.5);  
    @media (max-width: 1000px) {
      width: 90%;
      float: right;
    }
    @media (max-width: 700px) {
      width: 80%;
      margin-right: auto;
      margin-left: auto;
    }
`;

const BandMember = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    margin: 10px;

    

    h3 {
      color: black;
      font-size: 25px;
      font-family: 'Rock Salt', cursive;
    }
    h4 {
      font-size: 15px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
    }

    @media (max-width: 1000px) {
      h3 {
        font-size: 15px;
      }
      h4 {
        font-size: 10px;
      }
  
  
    }
`;



const TeamComponent = () => {
  return  <Section>
            <h1>Team</h1>
            <BandMember>
              <h3>Session Drummer & Studio Owner</h3>
              <h4>Lucas Mckinnon: Silversidesound.com</h4>
            </BandMember>
            <BandMember>
              <h3>Guitar</h3>
              <h4>Quinn Colpman:  Colpmanmusic@gmail.com</h4>
            </BandMember>
            <BandMember>
              <h3>Bass</h3>
              <h4>Duncan Ritcher-Sly & Grant Parkins</h4>
            </BandMember>
            <BandMember>
              <h3>Drums & Percussion</h3>
              <h4>Alex Campbell</h4>
            </BandMember>
            <BandMember>
              <h3>Keyboard & Piano</h3>
              <h4>Sam Laramee</h4>
            </BandMember>
            <BandMember>
              <h3>Vocals</h3>
              <h4>Maddy Dorion & Amanda Meiklejohn</h4>
            </BandMember>
          </Section>;
};

const Team = MotionHoc(TeamComponent);

export default Team;



