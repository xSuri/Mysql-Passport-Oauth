// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
};

const express = require('express');
const router = express.Router();

const PagesController = require("../controllers/PagesController");

router.get("/", isLoggedIn, PagesController.main);

router.get("/good", isLoggedIn, PagesController.good);
router.get("/adminpanel", isLoggedIn, PagesController.adminpanel);

module.exports = router;
