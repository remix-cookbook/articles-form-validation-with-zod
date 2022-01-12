import { ActionFunction, LinksFunction, useActionData } from "remix";
import styles from "~/style/form.css";
import { z } from "zod";

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
    return {
      formPayload,
      error,
    };
  }

  return {};
};

export default function () {
  const actionData = useActionData();

  return (
    <div className="wrapper">
      <form className="form" method="post">
        <fieldset>
          <label htmlFor="name">Name</label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={actionData?.formPayload?.name}
              key={actionData?.formPayload?.name}
            />
            <span className="text-sm text-red-500">
              {actionData?.error?.issues[0].message}
            </span>
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={actionData?.formPayload?.email}
              key={actionData?.formPayload?.email}
            />
            <span className="text-sm text-red-500">
              {actionData?.error?.issues[1].message}
            </span>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
