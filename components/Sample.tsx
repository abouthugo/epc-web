// This right here is how you import your css. Notice that the naming has to end in ".module.css" for this specific syntax to work
import styles from "../styles/Sample.module.css";

/**
 * A sample component that renders a card element with some made up content
 * @returns
 */
export default function Sample() {
  /**
   * The return statement of a component is always JSX
   * JSX looks just like HTML but you can mix in JavaScript by scaping the context with the curly braces {}
   */
  return (
    <div className={styles.card}>
      <div className={styles["card-top"]}>
        <h1>This is a sample component</h1>
      </div>
      <div className={styles["card-bottom"]}>
        <p>
          This is some text that can be used to describe what this little card
          is about. Perhaps the summary of a blog post or just a regular
          announcement. It{"'"}s meant to be dynamic.
        </p>
        <p>- Hugo</p>
      </div>
    </div>
  );
}
