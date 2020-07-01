const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
});

router.post('/',(req, res) => {
    inserRecord(req.body);
});

function insertRecord(req,res){

}

module.exports = router;