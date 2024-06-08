const cors = require('cors');

const whiteList = [ '*' ];
    // 'http://localhost:8080',
    // 'https://localhost:8523',
    // 'https://nucampsite-n5bz74iolq-uc.a.run.app', 

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if(whiteList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);