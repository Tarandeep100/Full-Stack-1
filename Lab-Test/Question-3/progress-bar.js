import chalk from 'chalk';

import ProgressBar from 'progress';

let downloadBar = new ProgressBar(':bar :percent :etas', {
    complete: chalk.bgGreen(" "),
    incomplete: chalk.bgRed(" "),
    width: 20,
    total: 100
});

const startProgress = () => {
    console.log(chalk.green("Downloaded --> Started."));
    let timer = setInterval(() => {
        downloadBar.tick();
        if (downloadBar.complete) {
            console.log(chalk.green('Dowmloaded --> Completed.'));
            clearInterval(timer);
        }
    }, 500);
}

export {
    startProgress
}