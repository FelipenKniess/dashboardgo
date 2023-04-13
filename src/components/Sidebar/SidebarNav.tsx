import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "../Sidebar/NavLink";
import NavSections from "../Sidebar/NavSection";
export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSections title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSections>
      <NavSections title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSections>
    </Stack>
  );
}
