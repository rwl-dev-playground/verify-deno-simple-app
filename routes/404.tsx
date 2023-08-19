import { type PageOptions } from "../layout.tsx";

export const notFoundErrorPageOptions: PageOptions = {
  title: "404 Not Found",
};

export const NotFoundError = () => {
  return <p>見つからない</p>;
};
