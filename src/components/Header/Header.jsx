import { useMenu } from '../contexts/MenuProvider';
import Logo from './Logo';
import * as S from './style';

function Header() {
    const { toggleMenu } = useMenu()

    return (
        <S.Header>
            <S.HeaderContainer>
                <Logo/>
                <S.MenuButton onClick={toggleMenu}>menu</S.MenuButton>
            </S.HeaderContainer>
        </S.Header>
    )
}

export default Header;