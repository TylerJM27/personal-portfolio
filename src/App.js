import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme } from "./utils/Themes";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alert from "@mui/material/Alert";

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    background: linear-gradient(
            38.73deg,
            rgba(204, 0, 187, 0.15) 0%,
            rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
            141.27deg,
            rgba(0, 70, 209, 0) 50%,
            rgba(0, 70, 209, 0.15) 100%
        );
    width: 100%;
    padding: 40px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const SnackbarContainer = styled(Snackbar)`
    z-index: 9999 !important;
    position: fixed !important;
    bottom: 100px;
`;

function App() {
    const [open, setOpen] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [email, setEmail] = useState(false);

    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Navbar />
                <Body>
                    <Hero />
                    <Wrapper>
                        <Skills />
                        {/* <Experience /> */}
                    </Wrapper>
                    <Projects />
                    <Wrapper>
                        <Education />
                    </Wrapper>
                    <Contact
                        setOpen={setOpen}
                        setInvalid={setInvalid}
                        setEmail={setEmail}
                    />
                    <Footer />
                </Body>
                <SnackbarContainer
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                >
                    <Alert
                        onClose={() => setOpen(false)}
                        severity="success"
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        Email sent succesfully! 🚀
                    </Alert>
                </SnackbarContainer>
                <SnackbarContainer
                    open={invalid}
                    autoHideDuration={6000}
                    onClose={() => setInvalid(false)}
                >
                    <Alert
                        onClose={() => setInvalid(false)}
                        severity="error"
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        Please fill every field.
                    </Alert>
                </SnackbarContainer>
                <SnackbarContainer
                    open={email}
                    autoHideDuration={6000}
                    onClose={() => setEmail(false)}
                >
                    <Alert
                        onClose={() => setEmail(false)}
                        severity="error"
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        Please enter a valid email.
                    </Alert>
                </SnackbarContainer>
            </Router>
        </ThemeProvider>
    );
}

export default App;
