import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { gsap } from 'gsap';
import { useMenu } from '../contexts/MenuProvider';
import * as S from './style';

function Menu() {
    const { menuOpen, toggleMenu } = useMenu()
    const { scrollToSection } = useScroll()
    const menuRef = useRef(null)

    useEffect(() => {
        if (menuOpen) {
            gsap.to(menuRef.current, {
                duration: 0.5,
                autoAlpha: 1,
                visibility: 'visible',
                pointerEvents: 'auto',
            })

            gsap.fromTo('.contact-section', { opacity: 0 }, { opacity: 1, delay: 1 })
        } else {
            gsap.to(menuRef.current, {
                duration: 0.5,
                autoAlpha: 0,
                visibility: 'hidden',
                pointerEvents: 'none',
            })
        }
    }, [menuOpen])

    function handleClick(e, name) {
        e.preventDefault();
        toggleMenu();
        scrollToSection(name);
        
        // Update URL hash without triggering a scroll
        const formattedName = name.toLowerCase();
        window.history.pushState(null, '', `#${formattedName}`);
    }

    return (
        <S.MenuWrapper ref={menuRef}>
            <S.MenuContainer>
                <S.MenuText>
                    Menu
                </S.MenuText>
                <S.CloseButton onClick={toggleMenu}>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Close menu">
                        <path d="M4.21837 0.723799C3.25336 -0.241266 1.68877 -0.241266 0.723758 0.723799C-0.241253 1.68886 -0.241253 3.25354 0.723758 4.21861L17.5056 21.0014L0.726485 37.7814C-0.238527 38.7465 -0.238525 40.3111 0.726485 41.2762C1.6915 42.2413 3.25609 42.2413 4.2211 41.2762L21.0002 24.4962L37.7789 41.2758C38.7439 42.2409 40.3085 42.2409 41.2735 41.2758C42.2385 40.3108 42.2385 38.7461 41.2735 37.781L24.4948 21.0014L41.2762 4.21898C42.2413 3.25392 42.2413 1.68924 41.2762 0.724172C40.3112 -0.240893 38.7466 -0.240893 37.7816 0.724172L21.0002 17.5066L4.21837 0.723799Z" fill="#070707" />
                    </svg>
                </S.CloseButton>
                <S.ItemsBlock>
                    <S.MenuItem as="a" href="#perspective" onClick={(e) => handleClick(e, 'Perspective')}>Perspective</S.MenuItem>
                    <S.MenuItem as="a" href="#features" onClick={(e) => handleClick(e, 'Features')}>Features</S.MenuItem>
                    <S.MenuItem as="a" href="#cases" onClick={(e) => handleClick(e, 'Cases')}>Cases</S.MenuItem>
                    <S.MenuItem as="a" href="#products" onClick={(e) => handleClick(e, 'Products')}>Products</S.MenuItem>
                    <S.MenuItem as="a" href="#company" onClick={(e) => handleClick(e, 'Company')}>Company</S.MenuItem>
                    <S.MenuItem as="a" href="#partners" onClick={(e) => handleClick(e, 'Partners')}>Partners</S.MenuItem>
                    <S.MenuItem as="a" href="#news" onClick={(e) => handleClick(e, 'News')}>News</S.MenuItem>
                    <S.MenuItem as="a" href="#contacts" onClick={(e) => handleClick(e, 'Contacts')}>Contacts</S.MenuItem>
                </S.ItemsBlock>
            </S.MenuContainer>
        </S.MenuWrapper>
    )
}

export default Menu;