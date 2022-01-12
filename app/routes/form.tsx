import { ActionFunction, LinksFunction } from "remix";
import styles from "~/style/form.css";
import z from "zod";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export const action: ActionFunction = async ({ request }) => {
  const formPayload = Object.fromEntries(await request.formData());

  const Validator = z.object({
    name: z.string().min(6),
    email: z.string().email(),
  });

  try {
    const validated = Validator.parse(formPayload);
    console.log(validated, "Data is valid. Send it to your persistence layer");
  } catch (error) {
    console.log(error);
  }

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
          <input type="text" name="email" id="email" />
        </fieldset>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
