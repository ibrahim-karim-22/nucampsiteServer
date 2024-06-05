const cors = require('cors');

const whiteList = [
    'http://localhost:8080',
    'https://localhost:8080',
    'http://nucampsite-n5bz74iolq-uc.a.run.app',
    'https://nucampsite-n5bz74iolq-uc.a.run.app', 
    'http://localhost:3000', 
    'https://localhost:3000',
    'http://localhost:3443', 
    'https://localhost:3443',
];
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