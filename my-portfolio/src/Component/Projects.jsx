import React from "react";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  HStack,
  Badge,
  Link,
} from "@chakra-ui/react";

import style from "./Project.module.css";

import { ExternalLinkIcon } from "@chakra-ui/icons";

const Responsive_Projects = [
  {
    pc_screenshot: "TechCube.png",

    mobile_screenshot: "TechCube-mobile.png",

    title: "TechCube",

    description:
      "TechCube is an E-commerce destination for cutting-edge electronic gadgets and products.",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "Redux.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://tech-cube-ten.vercel.app/",

    github: "https://github.com/ErGopiVishwakarma/Electronic-E-Store",
  },

  {
    pc_screenshot: "SkillHub.png",

    mobile_screenshot: "Skillhub-mobile.png",

    title: "SkillHub",

    clone: "clone : Udemy",

    description:
      "It is an ultimate destination for individuals seeking a wide array of comprehensive online courses.",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "Redux.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://nemskillhub.netlify.app/",

    github: "https://github.com/Ak-nut-47/Skill-Hub",
  },
  {
    pc_screenshot: "GardenEase.png",

    mobile_screenshot: "GardenEase-mobile.png",

    title: "GardenEase",

    clone: "clone : MyGarden",

    description:
      "It is a blogging platform for gardening enthusiasts containing various plants.",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://gardenease.vercel.app/",

    github: "https://github.com/akashgupta157/nippy-flavor-9468",
  },

  {
    pc_screenshot: "Safar.png",

    mobile_screenshot: "Safar-mobile.png",

    title: "Safar",

    description:
      "It is an online hotel booking platform that allows users to book hotels all over the world. ",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "Redux.png", w: "25px" },
      { skill: "Typescript.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://assorted-bulb-9592-sabiransari1.vercel.app/",

    github: "https://github.com/sabiransari1/assorted-bulb-9592",
  },
];

const Projects = () => {
  return (
    <Box border={"2px solid rgb(1, 16, 27)"} pb="100px" id="projects">
      {/* green border to below box */}

      <Box mt="110px">
        <Heading color="#039BE5" fontSize={35}>
          {" "}
          <Text as="span" color="white">
            My
          </Text>{" "}
          Projects
        </Heading>

        <SimpleGrid spacing="8" mt="20px" columns={1}>
          {Responsive_Projects.map((el) => {
            return (
              <GridItem
                key={Math.random()}
                className="project-card"
                bg="#9FA8DA"
                px="10px"
                py="25px"
              >
                {/* visible on tablet,mobile screen description box */}

                <Box
                  flexDirection="column"
                  display={{ base: "flex", "1349px": "none" }}
                >
                  <HStack justify="center">
                    <Heading className="project-title" fontSize={"23px"}>
                      {el.title}
                    </Heading>

                    <Badge fontSize={10} colorScheme={"green"}>
                      {el.clone}
                    </Badge>
                  </HStack>

                  <Box
                    m="auto"
                    display="flex"
                    flexDirection="column"
                    w="80%"
                    bg="blue.800"
                    borderRadius={"10px"}
                    mt="20px"
                    p="2"
                  >
                    <Text color="aqua" align="left">
                      Description :{" "}
                    </Text>

                    <Text className="project-description" align="left">
                      {el.description}
                    </Text>

                    <Text mt="5px" color="aqua" align="left">
                      Tech Stack :{" "}
                    </Text>

                    <HStack mt="10px" className="project-tech-stack">
                      {el.tech_stack.map((el) => {
                        return (
                          <Box key={Math.random(el)}>
                            <Image w={el.w} src={el.skill}></Image>
                          </Box>
                        );
                      })}
                    </HStack>

                    <Text mt="10px" color="aqua" align="left">
                      Deployed Link :{" "}
                    </Text>

                    <HStack mt="10px">
                      <Link isExternal href={el.netlify}>
                        <Image
                          _hover={{ cursor: "pointer" }}
                          border="2px solid"
                          borderRadius={"10px"}
                          bg="white"
                          w="50px"
                          src="Netlify logo.png"
                        ></Image>
                      </Link>

                      <ExternalLinkIcon zIndex="2" />

                      <Link isExternal href={el.github}>
                        <Image
                          bg="white"
                          _hover={{ cursor: "pointer" }}
                          borderRadius={"10px"}
                          w="30px"
                          src="github.png"
                        ></Image>
                      </Link>

                      <ExternalLinkIcon zIndex="2" />
                    </HStack>
                  </Box>
                </Box>

                {/* laptop andd iphone images */}

                <HStack
                  mt={{ base: "20px", "1349px": "0px" }}
                  flexDirection={{ base: "column", "848px": "row" }}
                  justify={{ base: "center", "1349px": "" }}
                  position={"relative"}
                >
                  <Image
                    zIndex={"2"}
                    w={{ base: "95%", "848px": "42.4%" }}
                    src="Laptop2.png"
                  ></Image>

                  <Image
                    id={style["Project-scr"]}
                    top={{ base: "5.6%", "848px": "22%", "1349px": "16.4%" }}
                    left={{
                      base: "12%",
                      "371px": "13%",
                      "496px": "14%",
                      "848px": "23.2%",
                      "1011px": "23.5%",
                      "1349px": "5.1%",
                    }}
                    w={{ base: "70%", "848px": "30.9%" }}
                    position={"absolute"}
                    src={el.pc_screenshot}
                  ></Image>

                  <HStack
                    display={{ base: "none", "1349px": "flex" }}
                    left="15%"
                    bottom="21%"
                    position={"absolute"}
                  >
                    <Link zIndex="2" isExternal href={el.netlify}>
                      <Image
                        _hover={{ cursor: "pointer" }}
                        border="2px solid"
                        borderRadius={"10px"}
                        bg="white"
                        w="50px"
                        src="Netlify logo.png"
                        boxShadow="2px 2px 10px black"
                      ></Image>
                    </Link>

                    <ExternalLinkIcon />

                    <Link zIndex="2" isExternal href={el.github}>
                      <Image
                        bg="white"
                        _hover={{ cursor: "pointer" }}
                        borderRadius={"10px"}
                        w="30px"
                        src="github.png"
                        boxShadow="2px 2px 10px black"
                      ></Image>
                    </Link>

                    <ExternalLinkIcon />
                  </HStack>

                  <Box
                    display={{ base: "block", "848px": "none" }}
                    h="30px"
                    mb="20px"
                  ></Box>

                  <Image
                    zIndex={"2"}
                    w={{ base: "70%", "848px": "20%" }}
                    src="Iphone.png"
                  ></Image>

                  <Image
                    top={{
                      base: "40.5%",
                      "296px": "40.3%",
                      "358px": "40%",
                      "363px": "39.6%",
                      "468px": "39%",
                      "555px": "38.5%",
                      "631px": "38%",
                      "848px": "2.5%",
                    }}
                    left={{
                      base: "26%",
                      "468px": "27%",
                      "848px": "64.5%",
                      "1349px": "46.1%",
                    }}
                    w={{ base: "45%", "848px": "12.8%" }}
                    h={{ base: "56%", "848px": "92%" }}
                    position={"absolute"}
                    src={el.mobile_screenshot}
                  ></Image>

                  {/* -------------DEscription box---------------------- */}

                  <Box display={{ base: "none", "1349px": "block" }}>
                    <HStack>
                      <Heading className="project-title" fontSize={"23px"}>
                        {el.title}
                      </Heading>

                      <Badge fontSize={10} colorScheme={"green"}>
                        {el.clone}
                      </Badge>
                    </HStack>

                    <Box bg="blue.800" borderRadius={"10px"} mt="20px" p="2">
                      <Text color="aqua" align="left">
                        Description :{" "}
                      </Text>

                      <Text className="project-description" align="left">
                        {el.description}
                      </Text>

                      <Text mt="5px" color="aqua" align="left">
                        Tech Stack :{" "}
                      </Text>

                      <HStack mt="10px" className="project-tech-stack">
                        {el.tech_stack.map((el) => (
                          <Image
                            key={Math.random()}
                            w={el.w}
                            src={el.skill}
                          ></Image>
                        ))}
                      </HStack>

                      <Text mt="10px" color="aqua" align="left">
                        Deployed Link :{" "}
                      </Text>

                      <HStack mt="10px">
                        <Link
                          className="project-deployed-link"
                          isExternal
                          href={el.netlify}
                        >
                          <Image
                            _hover={{ cursor: "pointer" }}
                            border="2px solid"
                            borderRadius={"10px"}
                            bg="white"
                            w="50px"
                            src="Netlify logo.png"
                          ></Image>
                        </Link>

                        <ExternalLinkIcon zIndex="2" />

                        <Link
                          className="project-github-link"
                          isExternal
                          href={el.github}
                        >
                          <Image
                            borderRadius="40px"
                            bg="white"
                            _hover={{ cursor: "pointer" }}
                            w="30px"
                            src="github.png"
                          ></Image>
                        </Link>

                        <ExternalLinkIcon zIndex="2" />
                      </HStack>
                    </Box>
                  </Box>
                </HStack>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
