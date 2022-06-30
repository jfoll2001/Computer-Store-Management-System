
var express = require('express');
var router = express.Router();

router.post('/customers/add', (req, res) => {
    let form = req.body;
    let cmd = 'INSERT INTO customers SET ?';
    conn.query(cmd, form, (err, result) => {
        if (err) {
            res.end(JSON.stringify({
                status: false,
                message: err.message
            }));
        }
        else {
            res.writeHead(200, { 'Content-Type': 'json' });
            res.end(JSON.stringify({
                status: true
            }));
        }
    });
});