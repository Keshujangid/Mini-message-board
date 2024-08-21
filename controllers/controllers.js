const query = require('../db/query')


async function showMessages(req, res) {
    const messages = await query.getAllMessages()
    // console.log(messages)
    res.render("index", { messages });
}

function newForm(req, res) {
    res.render("new");
}

async function openMessage(req, res) {
    const id = req.params.id;
    const message = await query.getSingleMessage(id)
    res.render("message", { message });
}

async function addMessage(req , res) {
    const text = req.body.message
    const user = req.body.name
    const added = new Date()
    await query.insertMessage(user , text , added)
    res.redirect('/')
}

module.exports = {
    showMessages,
    newForm,
    openMessage,
    addMessage
}
