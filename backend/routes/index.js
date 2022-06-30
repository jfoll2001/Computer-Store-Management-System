
var express = require('express');
var router = express.Router();

router.get('/customerslist', (req, res) => {
    let query = `SELECT * FROM customers`;
    conn.query(query, (err, results) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify(results));
    });
});

router.post('/customersadd', (req, res) => {
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

module.exports = router;