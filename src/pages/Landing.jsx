import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const response = await axios.get(`${baseURL}apple`);

  return;
};

const Landing = () => {
  return (
    <>
      <SearchFrom />
      <CocktailList />
    </>
  );
};

export default Landing;
