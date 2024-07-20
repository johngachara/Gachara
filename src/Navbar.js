import React from "react";
import { Box, Flex, Link, useColorModeValue, IconButton, useDisclosure, VStack, HStack, CloseButton, Container, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const NavItem = ({ icon, children, to, onClick }) => {
    const linkColor = useColorModeValue("blue.600", "blue.300");
    const hoverColor = useColorModeValue("blue.800", "blue.100");

    return (
        <Link
            as={RouterLink}
            to={to}
            p={2}
            rounded="md"
            display="flex"
            alignItems="center"
            color={linkColor}
            _hover={{
                textDecoration: 'none',
                color: hoverColor,
                bg: useColorModeValue("blue.50", "blue.900")
            }}
            onClick={onClick}
        >
            <Box as={icon} mr={2} />
            {children}
        </Link>
    );
};

function Navbar() {
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navItems = [
        { icon: FaHome, label: "Home", to: "/" },
        { icon: FaUser, label: "About", to: "/About" },
        { icon: FaProjectDiagram, label: "Projects", to: "/Projects" }
    ];

    return (
        <Box
            as="nav"
            position="fixed"
            w="100%"
            zIndex="sticky"
            borderBottom="1px"
            borderColor={borderColor}
            bg={bgColor}
            boxShadow="sm"
        >
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="md"
                        icon={<FaBars />}
                        aria-label="Open Menu"
                        display={{ md: "none" }}
                        onClick={onOpen}
                    />
                    <HStack spacing={8} alignItems="center">
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
                                JG
                            </Link>
                        </MotionBox>
                        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
                            {navItems.map((item, index) => (
                                <MotionBox
                                    key={item.label}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <NavItem icon={item.icon} to={item.to}>
                                        {item.label}
                                    </NavItem>
                                </MotionBox>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
            </Container>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
                        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
                            JG
                        </Link>
                        <CloseButton onClick={onClose} />
                    </Flex>
                    <VStack align="stretch" spacing={4} p={4}>
                        {navItems.map((item) => (
                            <NavItem
                                key={item.label}
                                icon={item.icon}
                                to={item.to}
                                onClick={onClose}
                            >
                                {item.label}
                            </NavItem>
                        ))}
                    </VStack>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Navbar;