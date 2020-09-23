const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generatePage(fileContent), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

//     fs.writeFile('./dist/index.html', generatePage(portfolioData), err => {
//         if (err) throw new Error(err);

//         console.log('Portfolio complete! Check out index.html to see the output!');

//         fs.copyFile('./src/css/style.css', './dist/style.css', err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }

//             console.log('Style sheet copied successfully!');
//         });
//     });
// });