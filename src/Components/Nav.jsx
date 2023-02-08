import { useState } from "react";
import {  useEffect } from "react";
import {
  Box,
  UnstyledButton,
  Container,
  Title,
  Text,
  Flex,
  Drawer,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "../Assets/Logo/Logo.jpg";

const Nav = () => {
  const [opened, setOpened] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 992px)");
  const HandleClick = () =>{
    navigate("/");
  }

  const navLinks = [
    
    {
      label: "GRAVITY",
      path: "/GRAVITY",
    },
    {
      label:"VENOM",
      path:"/VENOM"
    },
    {
      label:"TERMINATOR",
      path:"/TERMINATOR"
    },
    {
      label:"Contact Us",
      path:"/Contact"
    }

  
    
  ];
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
 
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
    isDesktop?(windowHeight > 257 ? setSticky(true) : setSticky(false)):(windowHeight > 115 ? setSticky(true) : setSticky(false));
    }
  };
  return (
 
 <div >
    <>
    <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing.lg,
        })}
      >
        <Container>
        <Flex
        justify="center">
        <img onClick={HandleClick} style={!isDesktop?{height:"90px",marginLeft:"10px",display:"flex" ,justifyContent:"center" }:{height:"90px",marginLeft:"10px",display:"flex" ,justifyContent:"center" }}  src={Logo}></img> 
        </Flex>
     
          
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing.md,
          backgroundColor: "#000000",
          position: sticky ? "fixed" : "static",
          top: 0,
          left: 0,
          right: 0,
          inlineSize: "100%",
          zIndex: 9,
        })}
      >
        <Container >
          <Flex align="center">
            {!isDesktop ? (
              <>
                <UnstyledButton
                  onClick={() => setOpened(true)}
                  sx={(theme) => ({
                    borderRadius: theme.radius.sm,

                    color: "#fff",
                  })}
                >
                  <Flex align="center" gap="sm">
                    <IconMenu2 />
                    
                  </Flex>
                </UnstyledButton>
                {/* Drawer  */}
                <Drawer
                  opened={opened}
                  onClose={() => setOpened(false)}
                  title="Pages"
                  padding="xl"
                  size="xl"
                  position="top"
                  transition="slide-down"
                  styles={{
                    drawer: {
                      height: 320,
                    },
                  }}
                >
                  <Flex wrap="wrap" gap="md">
                    {navLinks.map((item, idx) => (
                      <UnstyledButton
                        key={idx}
                        sx={(theme) => ({
                          display: "inline-flex",
                          padding: ".75rem 1rem",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#20262E",
                          color: theme.fn.primaryColor(),
                          borderRadius: 2,
                        })}
                        onClick={() => {
                          setOpened(false);
                          navigate(item.path);
                        }}
                      >
                        {item.label}
                      </UnstyledButton>
                    ))}
                  </Flex>
                </Drawer>
              </>
            ) : (
              <Flex sx={{ order: 1 }}>
                <Flex justify="center" gap="md">
                  {navLinks.map((item, idx) => (
                    <UnstyledButton
                      key={idx}
                      sx={(theme) => ({
                        display: "inline-flex",
                        padding: ".75rem 1rem",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "gray",
                        borderRadius: 5,
                        backgroundColor:"white",
                        transition: "background-color 200ms ease-in-out",
                        "&:hover": {
                          backgroundColor: "#0d1c31",
                        },
                      })}
                      onClick={() => {
                        setOpened(false);
                        navigate(item.path);
                      }}
                    >
                      {item.label}
                    </UnstyledButton>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        </Container>
      </Box>
    </>
    </div>
  

   
   
    
  );
};

export default Nav;
