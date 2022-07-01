const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=> res.json({message: "hello wolrd",
                                        sender: "NodeJs",
                                        Medium: "Docker"}));

module.exports = router;