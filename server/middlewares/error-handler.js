
"use strict";

module.exports = function (err, req, res, next) {
    if(!err.status)err.status = 500;
    if(!err.message) err.message = 'Something blew up';
    return res.status(err.status).json({ status: err.status, message: err.message });

};
    
    
