module.exports = app => {
	const Urls = app.db.models.Urls;
	app.get("/urls", (req, res) => {
		Urls.findAll({}, (urls) => {
			res.json({urls: urls});
		});
	});
};