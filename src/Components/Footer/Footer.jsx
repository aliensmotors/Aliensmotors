import { Box, Text, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons";
import Logo from "../../Assets/Logo/Logo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div >
      <footer>
        <div class="footer">
          <div className="Logo">
            <img src={Logo} className="LogoImg"></img>

          </div>

          <div class="row ">
            <Text style={{ fontSize: "20px", marginBottom: "16px" }}>
              Lets Connect
            </Text>
            <div className="flex md:justify-center">
            <a href="https://www.instagram.com/">
              <IconBrandInstagram style={{ fontSize: "35px" }} />
            </a>
            <a href="https://www.facebook.com/">
              <IconBrandFacebook style={{ fontSize: "35px" }} />
            </a>
            <a href="https://twitter.com/">
              <IconBrandTwitter style={{ fontSize: "35px" }} />
            </a>
            </div>
        
          </div>

          <Box class="row">
            <ul>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/AboutUs")}
                >
                  GRAVITY
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/NewsEvents")}
                >
                  VENOM
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/Activities")}
                >
                  TERMINATOR
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/ContactUs")}
                >
                  Contact Us
                </UnstyledButton>
              </li>
            </ul>
          </Box>

          <div class="row">ALIENS Copyright © 2023</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
