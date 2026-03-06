const config = require("../utils/config.json");

const getApiInfo = (req, res) => {
	res.json(config.apiInfo);
};

const getAbout = (req, res) => {
	res.json(config.about);
};

const getSkills = (req, res) => {
	res.json(config.skills);
};

const getExperience = (req, res) => {
	res.json(config.experience);
};

const getProjects = (req, res) => {
	res.json(config.projects);
};

const getBackground = (req, res) => {
	res.json({
		education: config.education,
		certificates: config.certificates,
		volunteering: config.volunteering,
	});
};

const getContact = (req, res) => {
	res.json(config.contact);
};

module.exports = {
	getApiInfo,
	getAbout,
	getSkills,
	getExperience,
	getProjects,
	getBackground,
	getContact,
}