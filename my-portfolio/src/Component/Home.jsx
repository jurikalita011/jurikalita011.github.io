import React from "react";

import {
  Box,
  HStack,
  Heading,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

const Home = () => {
  const OpenPDF = () => {
    const url = `https://drive.google.com/file/d/10IAVJJoPSlgyGEr2VSmviJdxe3t8-_tb/view?usp=sharing`;

    window.open(url, "_blank");
  };

  return (
    <Box mt="-90px" border="2px solid rgb(1, 16, 27)" id="home" mb="30px">
      {/* //mt = {{base : '20px','456px' : '25px','612px' : '30px','735px' : '40px', '934px':'100px'}} */}

      <HStack
        mt={{
          base: "86px",
          "456px": "94px",
          "612px": "95px",
          "735px": "105px",
          "934px": "150px",
        }}
        flexDirection={{ base: "column", "934px": "row" }}
        pl="25px"
        bg="#9FA8DA"
        backdropFilter={"blur(10px)"}
        justify={"space-between"}
      >
        <Box
          mb={{ base: "50px", "934px": "none" }}
          pt={{ base: "30px", "934px": "none" }}
          pr={{ base: "30px", "934px": "none" }}
          w={{ base: "98%", "934px": "50%" }}
          textAlign={"left"}
        >
          <Heading fontSize="50px" color="white" letterSpacing={"2px"} as="h1">
            Hi! I Am
          </Heading>

          <Heading
            fontSize="50px"
            id="user-detail-name"
            color="#3949AB"
            fontFamily={"monospace"}
            letterSpacing={"2px"}
            as="h1"
          >
            Juri Kalita
          </Heading>

          <Text mt="15px" fontSize="15px" id="user-detail-intro">
            An aspiring Full Stack Web Developer, dedicated to creating dynamic
            and user-centric web applications that seamlessly integrate
            front-end and back-end technologies.
          </Text>

          <Button
            onClick={OpenPDF}
            id="resume-button-2"
            mb="20px"
            _hover={{ background: "#3949AB" }}
            mt="15px"
            className="nav-link resume"
            size={["sm", "md"]}
            variant="none"
            bg="#3949AB"
            border="1px solid"
            boxShadow={"1px 1px 5px"}
            color="black"
          >
            <Link
              id="resume-link-2"
              _hover={{ textDecoration: "none" }}
              href="Juri-Kalita-Resume.pdf"
              isExternal
              download="Juri-Kalita-Resume.pdf"
            >
              Resume
            </Link>
          </Button>

          <HStack w="170px" justify={"space-between"}>
            <Link
              id="contact-linkedin"
              isExternal
              href="https://www.linkedin.com/in/juri-kalita-2b98b2246/"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="30px"
                src="linkedin.png"
              ></Image>{" "}
            </Link>

            <Link
              id="contact-github"
              isExternal
              href="https://github.com/jurikalita011"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="40px"
                src="github.png"
              ></Image>{" "}
            </Link>

            <Link
              id="contact-email"
              isExternal
              href="mailto:jurikalita011@gmail.com"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="35px"
                src="gmail.png"
              ></Image>{" "}
            </Link>

            <Link
              id="contact-phone"
              isExternal
              href="https://wa.me/+918486105450"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="35px"
                src="whatsapp.png"
              ></Image>{" "}
            </Link>
          </HStack>
        </Box>

        <Image
          borderRadius={"50%"}
          className="home-img"
          w={{
            base: "85%",
            "401px": "75%",
            "457px": "60%",
            "697px": "50%",
            "798px": "40%",
            "934px": "30%",
          }}
          src="juri_picc.png"
        ></Image>
      </HStack>
    </Box>
  );
};

export default Home;
