import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const box = useRef(); 
  let previousScrollPosition = 0;
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
     let scrollPosition = window.pageYOffset;
    if (scrollPosition > previousScrollPosition) {
      box.current.style.transform = "translateY(-200px)"; 
    }else{
      box.current.style.transform = "translateY(0)"; 
    }
    previousScrollPosition = scrollPosition;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      ref={box}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <Link href={social.url} key={social.url} ml={index > 0 ? "4" : "0"}>
                <FontAwesomeIcon icon={social.icon} />
              </Link>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
                <Link onClick={handleClick('projects')}>
                  Projects
                </Link>
                <Link onClick={handleClick("contactme")}>
                  Contact Me
                  </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
