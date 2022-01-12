import { ActionFunction, LinksFunction } from "remix";
import styles from "~/style/form.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export const action: ActionFunction = async ({ request }) => {
  const formPayload = Object.fromEntries(await request.formData());

  console.log(formPayload);

  return {};
};

export default function () {
  return (
    <div className="wrapper">
      <form className="form" method="post">
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </fieldset>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
