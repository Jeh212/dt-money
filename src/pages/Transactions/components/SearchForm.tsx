import { MagnifyingGlass } from "phosphor-react";
import { SerachFormContainer } from "./styles";

export const SearchForm = () => {
  return (
    <SerachFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SerachFormContainer>
  );
};
