import { Box, Text, Stack } from "@chakra-ui/react";

interface NavSectionsProps {
  title: string;
  children: React.ReactNode;
}
export default function NavSections({ title, children }: NavSectionsProps) {
  return (
    <Box>
      <Stack spacing="4" mt="8" align="stretch">
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          {title}
        </Text>
        {children}
      </Stack>
    </Box>
  );
}
