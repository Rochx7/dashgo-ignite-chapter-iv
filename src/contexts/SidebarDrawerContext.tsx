import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useEffect, createContext, ReactNode, useContext } from "react";
import { useRouter } from 'next/router'




interface SidebarDrawerProviderProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

    const disclosure = useDisclosure()
    const router = useRouter()
    
    //toda vez q tem uma troca de rota fecha o menu hamburguer
    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={ disclosure }>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)