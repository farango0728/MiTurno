import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./views/Home";
import Offices from "./views/Offices";
import Form from "./views/Form";
import ConfirmDate from "./views/ConfirmDate";
import DataProvaider from "./context/DataContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1F9547",
      },
      secondary: {
        main: "#3F3F41",
      },
    },

    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
  });

  return (
    <DataProvaider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirmDate" element={<ConfirmDate />} />
        </Routes>
      </ThemeProvider>
    </DataProvaider>
  );
}

export default App;
