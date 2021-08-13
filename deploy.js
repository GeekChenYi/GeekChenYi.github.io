const { execFile }  = require('child_process');
const version = process.env.npm_package_version
execFile('deploy.sh', [version], {shell: true}, (err, stdout, stderr) => {
    if(err){
        throw err;
    }
    console.log('stdout', stdout)
})