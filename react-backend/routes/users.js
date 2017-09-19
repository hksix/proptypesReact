var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query(`
  select * from cd.members;`)
  .then((results)=>{
    results.forEach(function(result){
      res.json([{
        id: result.memid,
        username: result.firstname
    }])
  })
  // res.json([{
  // 	id: 2,
  // 	username: "Express redux -test 2"
  // }]);
});
})

module.exports = router;


