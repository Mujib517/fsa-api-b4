const express = require('express');
const os = require('os');
const cluster = require('cluster');

// Javascript
// NodeJS REST Unifrom interface, auth, authorization, pagination
// React
// linkedin Ruby 23 servers
// NodeJS 3 servers 20%
// aws, azure
if (cluster.isMaster) {
    const cores = os.cpus().length;
    for (let i = 0; i < cores; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log('worker is shutdown', worker.id);
        cluster.fork();
    });
} else {
    const app = express();

    app.listen(3000, () => console.log(`Worker Server is running..`));

    app.get('/health', (req, res) => {

        const cores = os.cpus().length;
        res.status(200);
        res.send({ status: 'Up', cores, workerId: cluster.worker.id });
    });
}

