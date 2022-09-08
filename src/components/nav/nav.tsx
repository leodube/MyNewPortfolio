import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Container maxW="lg" bg="blue.400">
      <p>New component</p>
      <Divider />
    </Container>
  );
};

export default Nav;
