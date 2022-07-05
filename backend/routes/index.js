var express = require('express');
var router = express.Router();

//Display Customers List
router.get('/customerslist', (req, res) => {
    let cmd = `SELECT * FROM customers`;
    conn.query(cmd, (err, results) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify(results));
    });
});

//Add Customers
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

//Update Customers
router.put('/updatecustomers/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = `UPDATE customers SET ? WHERE customersid = ?`;
    conn.query(cmd, [form, id], (err, results) => {
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

//Delete Customers
router.delete('/deletecustomers/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM customers WHERE customersid = ?';
    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end;
    });
});

//Display Products List
router.get('/productslist', (req, res) => {
    let cmd = `SELECT * FROM products`;
    conn.query(cmd, (err, results) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify(results));
    });
});

//Add Products
router.post('/productsadd', (req, res) => {
    let form = req.body;
    let cmd = 'INSERT INTO products SET ?';
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

//Update Products
router.put('/updateproducts/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = `UPDATE products SET ? WHERE productsid = ?`;
    conn.query(cmd, [form, id], (err, results) => {
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

//Delete Products
router.delete('/deleteproducts/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM products WHERE productsid = ?';
    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end;
    });
});

//List Orders
router.get('/listorders', (req, res) => {
    let cmd = `SELECT * FROM orders`;
    conn.query(cmd, (err, results) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify(results));
    });
});

//Add Order
router.post('/ordersadd', (req, res) => {
    let form = req.body;
    let cmd = 'INSERT INTO orders SET ?';
    conn.query(cmd, form, (err, result) => {
        console.log(form)
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

//Update Orders
router.put('/updateorders/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = `UPDATE orders SET ? WHERE ordersid = ?`;
    conn.query(cmd, [form, id], (err, results) => {
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

//Delete Orders
router.delete('/deleteorders/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM orders WHERE ordersid = ?';
    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end;
    });
});

module.exports = router;