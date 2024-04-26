import React from "react";
import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
    const linkColor = useColorModeValue("white", "white");
    const bgColor = useColorModeValue("black", "black");

    return (
        <Flex bg={bgColor} p={4} color={linkColor} justifyContent="space-between">
            <Link as={RouterLink} to="/" p={2}>
                Home
            </Link>
            <Link as={RouterLink} to="/About" p={2}>
                About
            </Link>
            <Link as={RouterLink} to="/Projects" p={2}>
                Projects
            </Link>
        </Flex>
    );
}

export default Navbar;