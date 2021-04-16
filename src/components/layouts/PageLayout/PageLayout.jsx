import { useState } from 'react';
import S from "./PageLayout.module.scss"


import Nav from '@c/sections/Nav/Nav'
import Footer from '@c/sections/Footer/Footer'
import Titles from '@c/sections/Titles/Titles'
import { useTheme } from '@/theme/useTheme';
import MainLayout from "@c/layouts/MainLayout/MainLayout";
import Consent from "@c/parts/Consent/Consent"
function PageLayout({
  children,
  title = 'This is the default title',
  miniHeader
}) {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  return (
    <>
      <MainLayout selectedTheme={selectedTheme}>
        <div className={`${S.cover} ${miniHeader && S.miniCover}`}>
          <img src={'img/banner.jpg'} alt="" />
          <div className={S.mask}></div>
        </div>
        <div className="container">
          <div className="col-lg-8 offset-lg-2">
            <header>
              <Nav setter={setSelectedTheme}></Nav>
              {!miniHeader &&  <Titles></Titles>}
            </header>
            {children}

          </div>
        </div>
        <Footer></Footer>
        <Consent></Consent>
      </MainLayout>
    </>
  )
}

export default PageLayout