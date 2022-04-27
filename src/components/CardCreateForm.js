import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function CardCreateForm() {
  const [contentValue, setContentValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    console.log(contentValue, nameValue);

    const response = await fetch("/api/card/create", {
      method: "POST",
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
    console.log(await response.json());
  };

  return (
    <>
      <form onSubmit={submit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="content"
              label="Content"
              fullWidth
              value={contentValue}
              onChange={(event) => {
                setContentValue(event.target.value);
              }}
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
