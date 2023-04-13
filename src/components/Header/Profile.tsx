import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import NotificationsNav from "./NotificationsNav";

interface ProfileProps {
  showProfileData?: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" ml="auto">
      <NotificationsNav />
      <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Felipe Niehues Kniess</Text>
            <Text color="gray.300" fontSize="small">
              felipe.nkniess@gmail.com
            </Text>
          </Box>
        )}
        <Avatar
          size="md"
          name="Felipe Niehues Kniess"
          src="https://avatars.githubusercontent.com/u/49380433?v=4"
        />
      </Flex>
    </Flex>
  );
}
