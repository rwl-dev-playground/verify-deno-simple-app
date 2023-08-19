import { type PageOptions } from "../layout.tsx";

export const homePageOptions: PageOptions = {
  title: "HOME",
};

export const Home = () => {
  return (
    <>
      <p>TOPページ</p>
      <section>
        <h2>ページリンク</h2>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </section>
    </>
  );
};
