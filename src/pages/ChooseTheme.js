import React, { useState, useEffect } from "react";
import { useTheme } from "../theme/useTheme";
import { withRouter } from "react-router";
import Dialog from "../theme/Dialog";
import CreateThemeContent from "../theme/CreateThemeContent";
import ThemeSelector from "../theme/ThemeSelector";

function ChooseTheme() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const manageDialog = () => {
    setShowDialog(!showDialog);
  };

  const createTheme = (newTheme) => {
    setShowDialog(false);
    setNewTheme(newTheme);
  };
  return (
    <div>
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
    </div>
  );
}

export default withRouter(ChooseTheme);
