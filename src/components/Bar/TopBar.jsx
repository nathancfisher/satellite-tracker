import Clock from "./Clock";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { bar } from "./TopBar.module.css";

function TopBar() {
  return (
    <section className={bar}>
      <Clock />
      <SearchBar />
      <Logo />
    </section>
  );
}

export default TopBar;
