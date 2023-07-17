import { HeaderContainer, Heading } from "./Header.styled";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Heading>
          <h1 className="header-h1">Welcome to Redux Toolkit Tutorial</h1>
        </Heading>
      </HeaderContainer>
    </>
  );
};

export default Header;
