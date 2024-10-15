import classes from "../resume-page/resume.module.css";
import myResume from "../../assets/mockResume.png";

function Resume() {

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
        <>
            <h1 className={`${classes.resumeH1}`}>Resume</h1>
            
            <button onClick={handleDownload}  className={`${classes.resumeButton}`}>My Resume</button>

            <ul className={`${classes.resumeUl}`}>
                <li className={`${classes.resumeLi}`}>I am proficient in HTML and CSS webpage development.</li>
                <li className={`${classes.resumeLi}`}>I am proficient in JavaScript, using the command line, NodeJS, and NPM to create efficient interactive web pages.</li>
                <li className={`${classes.resumeLi}`}>I am proficient in React, combining all of the prior skills in order to create a professional grade webpage that allows the user to interact in many different ways, while maintaining sleek and efficient design to provide the user with a timeless and enjoyable experience.</li>
                <li className={`${classes.resumeLi}`}>I am proficient in using multilayed frameworks that allow for web components to operate in unique ways that allow the webpage to provide a unique experience for the user.</li>
                <li className={`${classes.resumeLi}`}>As a personal trainer, I have helped clients reach their weight loss goals, setting secular goals along the way to motivate them to stay disciplined and on track with the over all plan.
                </li>
                <li className={`${classes.resumeLi}`}>I am comfortable working alone on projects, finding efficient ways to complete a task.</li>
                <li className={`${classes.resumeLi}`}>When assigned a project, I am comfortable with finding means to get the task done in a timely manner.</li>
            </ul>
        </>
    )
}

export default Resume;