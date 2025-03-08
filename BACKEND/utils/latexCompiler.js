const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const compileToPDF = (inputPath) => {
    return new Promise((resolve, reject) => {
        // Get directory and filename
        const dir = path.dirname(inputPath);
        const filename = path.basename(inputPath, '.tex');

        // Change to working directory
        process.chdir(dir);

        // Run pdflatex command
        exec(`pdflatex -interaction=nonstopmode ${filename}.tex`, (error, stdout, stderr) => {
            if (error) {
                console.error('LaTeX compilation error:', error);
                reject(error);
                return;
            }

            // Check if PDF was created
            const pdfPath = path.join(dir, `${filename}.pdf`);
            if (fs.existsSync(pdfPath)) {
                // Clean up auxiliary files
                const auxFiles = ['.aux', '.log', '.out'];
                auxFiles.forEach(ext => {
                    const auxPath = path.join(dir, `${filename}${ext}`);
                    if (fs.existsSync(auxPath)) {
                        fs.unlinkSync(auxPath);
                    }
                });

                resolve(pdfPath);
            } else {
                reject(new Error('PDF file was not created'));
            }
        });
    });
};

module.exports = {
    compileToPDF
};