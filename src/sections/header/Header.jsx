import Styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className="bg-white shadow-[0px_0px_2px_rgba(0_0_0/0.2)]">
      <div
        className={`main-container flex items-center justify-between py-3 h-16`}
      >
        <a href="/">
          <img src="" />
          logo
        </a>

        <div className="flex items-center gap-x-12">
          <nav className="flex items-center gap-x-8">
            <a href="/">home</a>
            <a href="/about">about</a>
            <a href="/services">services</a>
            <a href="/contact">contact</a>
          </nav>
          <div className="flex items-center gap-x-4">
            <span>GEO</span>
            <span>DARK</span>
          </div>
        </div>
      </div>
    </header>
  );
};
