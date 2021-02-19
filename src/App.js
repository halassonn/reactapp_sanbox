import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./router";
import ThemeSelector from "./theme/ThemeSelector";
import Dialog from "./theme/Dialog";
import CreateThemeContent from "./theme/CreateThemeContent";

const browserHistory = createBrowserHistory({ basename: "/" });

// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

export default function App() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const manageDialog = () => {
    setShowDialog(!showDialog);
  };

  const createTheme = (newTheme) => {
    console.log(newTheme);
    setShowDialog(false);
    setNewTheme(newTheme);
  };

  // 5: Render if the theme is loaded.
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            {/* <Router history={browserHistory}>
              <Routes />
            </Router> */}

            <button className="btn" onClick={manageDialog}>
              Create a Theme
            </button>
            <Dialog
              header="Create a Theme"
              body={<CreateThemeContent create={createTheme} />}
              open={showDialog}
              callback={manageDialog}
            />
            <ThemeSelector setter={setSelectedTheme} newTheme={newTheme} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
