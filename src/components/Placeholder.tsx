import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Placeholder() {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      Welcome! To get started, go to the <Link to="/members">members list</Link>
      .
    </Box>
  );
}
