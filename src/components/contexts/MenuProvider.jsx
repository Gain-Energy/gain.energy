import { createContext, useContext, useEffect, useRef, useState } from 'react';

const MenuContext = createContext()

export const useMenu = () => useContext(MenuContext)

const SCROLL_THRESHOLD = 100

export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerHidden, setHeaderHidden] = useState(false)
    const lastScrollY = useRef(0)

    const toggleMenu = () => setMenuOpen(prevState => !prevState)

    useEffect(() => {
        if (menuOpen) {
            setHeaderHidden(false)
            return
        }

        lastScrollY.current = window.scrollY

        const handleScroll = () => {
            const scrollY = window.scrollY
            const distance = scrollY - lastScrollY.current

            if (Math.abs(distance) < SCROLL_THRESHOLD) return

            lastScrollY.current = scrollY
            setHeaderHidden(distance > 0 && scrollY > SCROLL_THRESHOLD)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [menuOpen])

    return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu, headerHidden }}>
        {children}
    </MenuContext.Provider>
    )
}
