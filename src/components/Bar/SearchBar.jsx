import Button from "../Button";
import DropdownIcon from "./DropdownIcon";
import Input from "../Input";
import { searchBar, search, btn } from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={searchBar}>
      <Input style={search}>Search by name or id</Input>
      <Button style={btn}>
        <DropdownIcon />
      </Button>
    </div>
  );
}

export default SearchBar;
