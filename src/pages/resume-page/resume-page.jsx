// Import CSS Hooks
import classes from "../resume-page/resume.module.css";

// Import MUI Material Hooks
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid2';

// Import Image Hooks
import myResume from "../../assets/haydenResume.png";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "../../components/resume-pdf-viewer/resume-pdf";

import { Link } from "react-router-dom";

function Resume() {

    const isMobile = useMediaQuery(`(max-width: 435px)`)

    const resumePageTheme = createTheme({
        breakpoints: {
            values: {
            mobile: 0,
            tablet: 426,
            laptop: 768
            }
        },
        palette: {
            primary: {
                main: "#C3C3C3",
            },
            secondary: {
                main: "#508991",
            },
            success: {
                main: "#004346",
            },
            info: {
                main: "#81717A",
            },
        }
    })

    const handleDownload = async () => {

        try {
            const response = await fetch(myResume);
            const blob = await response.blob();
            const fileURL = URL.createObjectURL(blob);
            open(fileURL, '_blank')
            const aLink = document.createElement('a');
            aLink.href = fileURL;
            aLink.download = `Hayden_Fitzpatrick-Brintle_Resume.pdf`;
            aLink.click();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div id='connect'>
            <ThemeProvider theme={resumePageTheme}>

                <Grid 
                    container
                    direction="row"
                    spacing={2}
                    aligns="center"
                    // alignItems="center"
                    // justifyContent="center"
                    sx={{
                        marginTop: "5rem",
                    }}
                >

                    {isMobile === true ? (
                        <>
                            <Grid
                                display='flex'
                                flexDirection='column'
                                alignItems='center'  
                                justifyContent='center'
                                size={{ 
                                    mobile: 12
                                }}
                            >
                                <h1 className={`${classes.resumeH1}`}>CONNECT</h1>
                            </Grid>
                        </>
                    ) : (
                        // Conditional rendering for the projects in tablet and laptop view
                        <>
                            <Grid
                                display='flex'
                                flexDirection='column'
                                alignItems='center'  
                                justifyContent='center'
                                size={{ 
                                    mobile: 1,
                                    tablet: 1, 
                                    laptop: 1 
                                }}
                            >
                                <h1 className={`${classes.resumeH1}`}>
                                    C<br/>
                                    O<br/>
                                    N<br/>
                                    N<br/>
                                    E<br/>
                                    C<br/>
                                    T</h1>
                            </Grid>
                        </>
                    )}

                        {isMobile === true ? (
                            <>
                                <Grid
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    size={{
                                        mobile: 12,
                                        tablet: 10,
                                        laptop: 10
                                    }}
                                    >
                                        <PDFViewer className={classes.pdfViewerMobile}>
                                            <MyDocument />
                                        </PDFViewer>
                                </Grid>
                            </>
                            ) : (
                            <>
                                <Grid
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    size={{
                                        mobile: 12,
                                        tablet: 10,
                                        laptop: 10
                                    }}
                                    >
                                        <PDFViewer className={classes.pdfViewer}>
                                            <MyDocument />
                                        </PDFViewer>
                                </Grid>
                            </>
                        )}


                            {isMobile === true ? (
                                <>
                                    {/* <Grid
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        size={{
                                            mobile: 3,
                                            tablet: 3,
                                            laptop: 3
                                        }}
                                    >
                                        <h1 className={`${classes.resumeH1}`}>
                                            <Button component={Link} to="https://github.com/haydencfb">GH</Button></h1>
                                    </Grid>

                                    <Grid
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        size={{
                                            mobile: 3,
                                            tablet: 3,
                                            laptop: 3
                                        }}
                                    >
                                        <h1 className={`${classes.resumeH1}`}>
                                            <Button component={Link} to="https://www.linkedin.com/in/haydencfb/">LI</Button></h1>
                                    </Grid>

                                    <Grid
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        size={{
                                            mobile: 3,
                                            tablet: 3,
                                            laptop: 3
                                        }}
                                    >
                                        <h1 className={`${classes.resumeH1}`}>
                                            <Button component={Link} to="https://www.youtube.com/@haydencfb">YT</Button></h1>
                                    </Grid>

                                    <Grid
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        size={{
                                            mobile: 3,
                                            tablet: 3,
                                            laptop: 3
                                        }}
                                    >
                                        <h1 className={`${classes.resumeH1}`}>
                                            <Button component={Link} to="https://www.instagram.com/hayden.cfb/">IG</Button></h1>
                                    </Grid> */}
                                </>
                            ) : (
                                <Grid
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    size={{
                                        mobile: 1,
                                        tablet: 1,
                                        laptop: 1
                                    }}
                                >
                                    <h1 className={`${classes.resumeButton}`}>
                                        <Button component={Link} to="https://github.com/haydencfb">GH</Button><br/>
                                        <Button component={Link} to="https://www.linkedin.com/in/haydencfb/">LI</Button><br/>
                                        <Button component={Link} to="https://www.youtube.com/@haydencfb">YT</Button><br/>
                                        <Button component={Link} to="https://www.instagram.com/hayden.cfb/">IG</Button>
                                    </h1>
                                </Grid>
                            )}

                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Resume;