import React from "react";
import Spacer from "../components/Spacer";
import { METAText } from "../components/TextBodies";
import { HeadingFour, HeadingThree } from "../components/Headings";
import "./FooterView.css";

export default function FooterView(props) {
  return (
    <div className="footer">
      <HeadingThree>
        Project in DH2642 Interaction Programming and the Dynamic Web
      </HeadingThree>
      <Spacer size={0} />
      <METAText>
        Developed by Felicia Atterling, Greta Jonsson, Patrik Larsson and Samuel
        Ribaric
      </METAText>
    </div>
  );
}
