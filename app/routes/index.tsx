import { LinksFunction } from "remix";
import styles from "~/style/form.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export default function Index() {
  return (
    <div className="wrapper">
      <form className="form">
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" autoComplete="off" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="off" />
        </fieldset>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
