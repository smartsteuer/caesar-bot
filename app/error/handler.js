function create404(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
}

function setStatus(res, err) {
	res.status(err.status || 500);
}
function sendErrorDev(err, req, res, next) {
	setStatus(res, err);
	res.json({
		message: err.message,
		error: err
	});
}

function sendErrorProd(err, req, res, next) {
	setStatus(res, err);
	res.json({
		message: err.message,
		error: {}
	});
}

module.exports = {
	create404: create404,
	sendErrorDev:sendErrorDev,
	sendErrorProd:sendErrorProd
}