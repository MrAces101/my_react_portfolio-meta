import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack align="left" bg="white" color="black" p="3" borderRadius="12px">
      <Image src={imageSrc} alt={title} />
      <Heading size='sm'>{title}</Heading>
      <Text>{description}</Text>
      <HStack align="center" justify="left">
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
    )
};

export default Card;
