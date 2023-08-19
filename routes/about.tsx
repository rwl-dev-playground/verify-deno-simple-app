import { type PageOptions } from "../layout.tsx";

export const aboutPageOptions: PageOptions = {
  title: "ABOUT",
};

export const About = () => {
  return (
    <>
      <p>概要ページ</p>
      <a href="/">TOPに戻る</a>
    </>
  );
};
