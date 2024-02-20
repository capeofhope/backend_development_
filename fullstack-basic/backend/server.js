import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//get a list of jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke-1",
      content: "This is a joke 1",
    },
    {
      id: 2,
      title: "joke-2",
      content: "This is a joke 2",
    },
    {
      id: 3,
      title: "joke-3",
      content: "this is a joke 3",
    },
    {
      id: 4,
      title: "joke-4",
      content: "this a joke-4",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
