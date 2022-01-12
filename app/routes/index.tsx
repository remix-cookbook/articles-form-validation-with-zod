import { Link } from "remix";

export default function Index() {
  return (
    <div className="wrapper">
      <h1 className="mt-12 text-xl antialiased font-semibold text-center text-white">
        Go to <Link to="/form">/form</Link>
      </h1>
    </div>
  );
}
