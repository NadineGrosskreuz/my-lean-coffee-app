import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import useSWR from "swr";

export default function CardGrid() {
  const { data, error } = useSWR("/api/cards");
  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }
  return (
    <Grid container spacing={4}>
      {data.map((card) => (
        <Grid item xs={4} key={card.id}>
          <Card name={card.name} content={card.content} />
        </Grid>
      ))}
    </Grid>
  );
}
