// Importing Car Images



// Gravity+ Images Import 
import GravityPlusImg from "../Assets/GravityPlusImg/LandingPage.png";
import GravityPlusImg22 from "../Assets/GravityPlusImg/BaseSpecs.jpg";
import GravityPlusImg1 from "../Assets/GravityPlusImg/Image1.jpg";
import GravityPlusImg2 from "../Assets/GravityPlusImg/Image2.jpg";
import GravityPlusImg3 from "../Assets/GravityPlusImg/Image3.jpg";
import GravityPlusImg4 from "../Assets/GravityPlusImg/Image4.jpg";
import GravityPlusImg5 from "../Assets/GravityPlusImg/Image5.png";
import GravityPlusImg6 from "../Assets/GravityPlusImg/Gravity.jpg";
import GravityPlusAero from "../Assets/GravityPlusImg/Aerodynamics.mov"
import GravityOverview from "../Assets/GravityPlusImg/Overview.mov";
import HomePageImg from "../Assets/GravityPlusImg/HomePgImg.png";
import Section2Img1 from "../Assets/GravityPlusImg/Section2Img1.jpg";
import Section2Img2 from "../Assets/GravityPlusImg/Section2Img2.jpg";
import Section2Img3 from "../Assets/GravityPlusImg/Section2Img3.jpg";
import Section2Img4 from "../Assets/GravityPlusImg/Section2Img4.jpg";
import DriveModeGif from "../../src/Assets/GravityPlusImg/DriveMode.gif";
import BatteryRangeGif from "../../src/Assets/GravityPlusImg/BatteryRange.gif";
import HorsePowerGif from "../../src/Assets/GravityPlusImg/HorsePower.gif";
import AirbagsGif from "../../src/Assets/GravityPlusImg/Airbags.gif";
import MultimediaGif from "../../src/Assets/GravityPlusImg/Multimedia.gif";
import MultipleRadar from "../../src/Assets/GravityPlusImg/Radar.gif";
import UltraSensor from "../../src/Assets/GravityPlusImg/UltraSensor.gif";
import MultipleCamera from "../../src/Assets/GravityPlusImg/MultipleCamera.gif";
import LaserTech from "../../src/Assets/GravityPlusImg/LaserTech.gif";
import View from "../../src/Assets/GravityPlusImg/360view.gif";

// Venom Images Import

import FalconImg from "../Assets//Venom/FalconHomePg.jpg";
import Venom from "../Assets/Venom/Venom.jpg";
import Venom1 from "../Assets/Venom/Venom1.jpg";
import Venom2 from "../Assets/Venom/Venom2.jpg";
import Venom3 from "../Assets/Venom/Venom3.jpg";
import Venom4 from "../Assets/Venom/Venom4.jpg";
import Venom5 from "../Assets/Venom/Venom5.jpg";
import Venon6 from "../Assets/Venom/Venom7.jpg";
import Venom7 from "../Assets/Venom/Venom8.jpg";

// Terminator Images 

import Terminator1 from "../Assets/Terminator/TERMINATOR1.jpg";
import Terminator2 from "../Assets/Terminator/Terminator02.jpg";
import Terminator3 from "../Assets/Terminator/Terminator03.jpg";
import Terminator4 from "../Assets/Terminator/Terminator4.jpg";
import Terminator5 from "../Assets/Terminator/Terminator05.jpg";
import Terminator6 from "../Assets/Terminator/Terminator06.jpg";
import Terminator7 from "../Assets/Terminator/Terminator07.jpg";
import Terminator8 from "../Assets/Terminator/TERMINATOR08.jpg";

const ProductsObj = [
    {
        Name: "Gravity",
        Decription: "Aliens Sedan",
        Images: {
            Image0: GravityPlusImg,
            Image1: GravityPlusImg1,
            Image2: GravityPlusImg2,
            Image3: GravityPlusImg3,
            Image4: GravityPlusImg4,
            Image5: GravityPlusImg5,
            Image6: HomePageImg,
            Image7 :GravityPlusImg6,
            Image8: Section2Img1,
            Image9: Section2Img2,
            Image10: Section2Img3,
            Image11: Section2Img4,
            Image12: DriveModeGif,
            Image13: BatteryRangeGif,
            Image14: HorsePowerGif,
            Image15: AirbagsGif,
            Image16: MultimediaGif,
            Image17: MultipleRadar,
            Image18: UltraSensor,
            Image19: MultipleCamera,
            Image20: LaserTech,
            Image21: View,
            Image22:GravityPlusImg22
        },
        Video: {
            Overview: GravityOverview,
            Aerodynamics: GravityPlusAero,
        },
        Specifications : {
            Range: "600 KM",
            Accleration: "2.8 sec",
            TopSpeed: "260 Km/hr",
            PeakPower: "1,020 hp"
        }
    },
    {
        Name: "Venom",
        Decription: "Aliens Sports",
        Images: {
            Image0: FalconImg,
            Image7:  Venom,
           
            Image6: HomePageImg,
            Image8: Venom1,
            Image9: Venom2,
            Image10: Venom3,
            Image11: Venom4,
            Image12: Venom5,
            Image13: Venon6,
            Image14: Venom7
        },
        Video: {
            Overview: GravityOverview,
            Aerodynamics: GravityPlusAero,
        },
        Specifications : {
            Range: "600 KM",
            Accleration: "2.8 sec",
            TopSpeed: "260 Km/hr",
            PeakPower: "1,020 hp"
        }
    },
    {
        Name: "Terminator",
        Decription: "Aliens Truck",
        Images: {
            Image0: Terminator1,
            Image7:  Terminator2,
            Image8:  Terminator3,
            Image9: Terminator4,
            Image10: Terminator5,
            Image11: Terminator6,
            Image12: Terminator7,
            Image13: Terminator8,
           
        },
        Video: {
            Overview: GravityOverview,
            Aerodynamics: GravityPlusAero,
        },
        Specifications : {
            Range: "600 KM",
            Accleration: "2.8 sec",
            TopSpeed: "260 Km/hr",
            PeakPower: "1,020 hp"
        }
    },
    

]

export default ProductsObj;