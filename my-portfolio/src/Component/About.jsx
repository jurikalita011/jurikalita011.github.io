import React from "react";

import { Box, Text, Heading } from "@chakra-ui/react";

import style from "./Aboutme.module.css";

const About = () => {
  return (
    <Box
      border="2px solid rgb(1, 16, 27)"
      h="100vh"
      id="about"
      className="about section"
      mb="40px"
    >
      <Heading mt="150px" color="#039BE5" fontSize={35}>
        <Text as="span" color="white">
          About
        </Text>{" "}
        Me
      </Heading>

      <Text mt="50px" fontSize={"20"}>
        Hello! I am Juri
      </Text>

      <Box
        className={style.aboutme}
        color="white"
        p={{ base: "8", "486px": "10" }}
        borderRadius={"10px"}
        bg="#151415"
        w={{ base: "100%", "410px": "80%" }}
        m="auto"
        mt="20px"
      >
        <Text mt="15px" fontSize="16px" id="user-detail-intro">
          an aspiring Full Stack Web Developer with React,Redux HTML,
          CSS,JavaScript,Node Js. Skilled in creating visually appealing and
          user-friendly websites. Collaborative team player with problem-solving
          skills and attention to detail. Committed to staying updated with
          industry trends and delivering innovative solutions.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
