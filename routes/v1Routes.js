const express = require('express');
const { getAbout, getSkills, getProjects, getExperience, getBackground, getContact } = require('../controllers/v1Controllers');
const router = express.Router();

router.get("/about", getAbout);
router.get("/skills", getSkills);
router.get("/experience", getExperience);
router.get("/projects", getProjects);
router.get("/background", getBackground);
router.get("/contact", getContact);

module.exports = router;