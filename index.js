const express = require('express');
const router = express();

router.use(express.static('public'));
var path = require('path');

router.get('/', function (req, res) {
	 res.sendFile(path.join(__dirname+'/view/index.html'));

});

router.listen(3000, function () {
  console.log('Website listening on port 3000!');
});
