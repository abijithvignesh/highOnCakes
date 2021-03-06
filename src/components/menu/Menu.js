import {React, forwardRef,useState} from "react";
import {
  Wrapper,
  Title,
  MenuTitle,
  Cakes,
  Tidbits,
  MenuItems,
  Container,
  Top,
  Bottom,
  Menuimage,
  Text,
  ItemContainer
} from "./MenuElements";
import cakemenu from "../../images/cakemenu.svg";
import split from '../../images/Split.svg';
import tidbits from "../../images/Tidbits.svg";
import creamcakes from "../../images/creamcakes.png"
import pinata from "../../images/pinata.png"
import tsunami from "../../images/tsunami.png"
import fondant from "../../images/fondant.png"

const Menu = forwardRef((props, ref) => {
  const [showingMenu, setShowingMenu] = useState('cakes');

  const toggleMenu = (menuType) => setShowingMenu(menuType);
  return (
    <>
      <Wrapper >
        <Container  ref={ref}>
          <Title>Menu</Title>
          <MenuTitle>
            <Cakes>
              <Top>
                <Menuimage onClick={() => setShowingMenu('cakes')} src={cakemenu} alt="cakemenu" />
              </Top>
              <Bottom>
                <Text>CAKES</Text>
              </Bottom>
            </Cakes>
            <Menuimage src={split} alt="split" />
            <Tidbits>
              <Top>
                <Menuimage onClick={() => setShowingMenu('tidbits')} src={tidbits} alt="tidbits" />
              </Top>
              <Bottom>
                <Text>TIDBITS</Text>
              </Bottom>
            </Tidbits>
          </MenuTitle>

          {
            showingMenu === 'cakes' ? 
              <MenuItems>
              <ItemContainer>
                <Top>
                  <Menuimage src={creamcakes} alt="cakemenu" />
                </Top>
                <Bottom>
                  <Text>CREAM CAKES</Text>
                </Bottom>
                </ItemContainer>
                <ItemContainer>
                <Top>
                  <Menuimage src={pinata} alt="tidbits" />
                </Top>
                <Bottom>
                  <Text>PINATA CAKES</Text>
                </Bottom>
                </ItemContainer>
                <ItemContainer>
                <Top>
                  <Menuimage src={tsunami} alt="tidbits" />
                </Top>
                <Bottom>
                  <Text>TSUNAMI CAKES</Text>
                </Bottom>
                </ItemContainer>
                <ItemContainer>
                <Top>
                  <Menuimage src={fondant} alt="tidbits" />
                </Top>
                <Bottom>
                  <Text>FONDANT CAKES</Text>
                </Bottom>
                </ItemContainer>
                <ItemContainer>
                <Top>
                  <Menuimage src={creamcakes} alt="cakemenu" />
                </Top>
                <Bottom>
                  <Text>ENTREMENTS</Text>
                </Bottom>
                </ItemContainer>
                <ItemContainer>
                <Top>
                  <Menuimage src={pinata} alt="tidbits" />
                </Top>
                <Bottom>
                  <Text>BUCKET CAKES</Text>
                </Bottom>
                </ItemContainer>
                <ItemContainer>
                <Top>
                  <Menuimage src={tsunami} alt="tidbits" />
                </Top>
                <Bottom>
                  <Text>PHOTO CAKES</Text>
                </Bottom>
                </ItemContainer>
              </MenuItems>
            :
              <MenuItems>
              <ItemContainer>
                <Top>
                  <Menuimage src={creamcakes} alt="cakemenu" />
                </Top>
                <Bottom>
                  <Text>CREAM CAKES</Text>
                </Bottom>
              </ItemContainer>
              </MenuItems>
          }
        </Container>
      </Wrapper>
    </>
  );
}
)
export default Menu;