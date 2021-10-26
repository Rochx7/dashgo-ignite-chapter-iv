import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData=true}:ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Guilherme Rocha</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >rochagamer55@hotmail.com</Text>
                </Box>)}
            <Avatar
                    size="md"
                    name="Guilherme Rocha"
                    src="https://github.com/rochx7.png" 
                />
        </Flex>
    )
}