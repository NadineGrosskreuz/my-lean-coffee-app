import { Typography } from "@mui/material";
import CardGrid from "../src/components/CardGrid";
import { getCards } from "../src/services/get-cards";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export function getStaticProps() {
  const cards = getCards();
  return {
    props: {
      fallback: {
        "/api/cards": cards,
      },
    },
  };
}

export default function Cards({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Typography variant="h1">Cards</Typography>
      <CardGrid />
    </SWRConfig>
  );
}
