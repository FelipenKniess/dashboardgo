import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const disclosuer = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosuer.onClose();
  }, [router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disclosuer}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);
