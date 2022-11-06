import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionContext } from "../../../contexts/transaction-context";
import { SerachFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const { fetchTransaction } = useContext(TransactionContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>();

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransaction(data.query);
  }

  return (
    <SerachFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SerachFormContainer>
  );
};
