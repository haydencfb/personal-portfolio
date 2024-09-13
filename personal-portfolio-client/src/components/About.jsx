import classes from "../styles/main.module.css";

function About() {
  return (
    <div className={`${classes.div}`}>
      <h1 className={`${classes.aboutH1}`}>About</h1>
      <p className={`${classes.aboutP}`}>
        With a background that is full of communication and seeking improvement,
        paired with my engaging personality, I am proficient in collaborative
        environments. As someone who has working in fast-paced environments, I
        am able to work efficientely with my time. This being said, a timely
        manner does not lack organization and quality of work, as I am someone
        who takes pride in any project that I complete.
      </p>
      <h1 className={`${classes.aboutH1}`}>Skills</h1>
      <p className={`${classes.aboutP}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        aliquam odio reprehenderit? Repellat voluptate sunt praesentium
        consequuntur officia fuga delectus dolor deleniti libero amet, ipsum
        ratione quo id accusamus rerum.
      </p>
      <h1 className={`${classes.aboutH1}`}>Background</h1>
      <p className={`${classes.aboutP}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        enim architecto minima quisquam, quibusdam doloremque omnis incidunt
        alias velit rerum, quae minus, magni quia nihil quos? Neque voluptatum
        reiciendis eligendi?
      </p>
    </div>
  );
}

export default About;
