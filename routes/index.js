const express = require("express");
const router = express.Router();


// Sample messages
const messages = [
    {
      text: "Hello World!",
      user: "Charles (Leclerc)",
      added: new Date("2024-07-31T15:30:00Z"), // Custom date
    },
    {
      text: "I am a completely real message.",
      user: "Fernando Alonso",
      added: new Date("2024-07-31T12:00:00Z"), // Custom date
    },
  ];
  
  router.get("/", (req, res) => {
    res.render("index", { messages });
    res.end();
  });
  
  router.get("/new", (req, res) => {
    res.render("new");
    res.end();
  });

  router.get("/message/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id];
    res.render("message", { message });
  });

  router.post("/new",(req,res)=>{
    messages.push({
      text: req.body.message,
      user: req.body.name,
      added: new Date()
    })
    res.redirect('/')
    res.end();
  })

  module.exports = router