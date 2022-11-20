import * as S from './styles'

const Header = () => {
  return (
    <S.Main>
      <h1>Shop Header</h1>
      <nav>
        <S.NavLink href='/about'>About</S.NavLink>
      </nav>
    </S.Main>
  );
};

export default Header;