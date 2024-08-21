const pool = require('./pool')


async function getAllMessages() {
    try {
        const result = await pool.query('SELECT * FROM messages;');
        return result.rows; // Access the rows property to get the table data
        // console.log(messages); // This will log just the array of message objects

    } catch (err) {
        console.error('Error fetching messages:', err);
    }
}

async function getSingleMessage(id) {
    try {
        const result = await pool.query(`SELECT * from messages where id=$1;`, [id])
        return result.rows[0];
    } catch (err) {
        console.error('Error fetching messages:', err);
    }
}

async function insertMessage(username, message, added) {
    try {
        await pool.query('INSERT INTO messages (username , message , added) VALUES($1, $2, $3)',[username , message ,added])
    } catch (error) {
        console.error('Error inserting messages:', error);
    }
}


module.exports = {
    getAllMessages,
    getSingleMessage,
    insertMessage
}