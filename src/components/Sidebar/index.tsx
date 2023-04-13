import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  useBreakpointValue,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SidebarNav";

export default function Sidebar() {
  const showDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useSidebarDrawer();

  if (showDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SideBarNav />
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}
