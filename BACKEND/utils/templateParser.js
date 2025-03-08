const fs = require('fs');
const path = require('path');


const headerParser = (data) => {
    /** @param {Object.<string, string>} data - Dictionary of placeholder values */
    
    const headerPlaceholders = [
        'FULL_NAME',
        'TITLE',
        'EMAIL',
        'PHONE',
        'LOCATION',
        'LINKEDIN',
        'GITHUB'
    ];

    const filePath = path.join('BACKEND/utils/templates', 'minimal.tex');
    let fileContent = fs.readFileSync(filePath, 'utf8'); // Read synchronously

    headerPlaceholders.forEach(placeholder => {
        const value = data[placeholder] || ''; // Use empty string if value not provided
        fileContent = fileContent.replaceAll(`{${placeholder}}`, value);
    });

    return fileContent;
}


const profileParser = (data) => {
    const profilePlaceholders = [
        'PROFILE_TEXT'
    ];

    let fileContent = fs.readFileSync('temp.tex', 'utf8');

    profilePlaceholders.forEach(placeholder => {
        const value = data[placeholder] || '';
        fileContent = fileContent.replaceAll(`{${placeholder}}`, value);
    });

    return fileContent;
};

const experienceParser = (experiences) => {
    const experiencePlaceholders = [
        'COMPANY_NAME',
        'LOCATION',
        'POSITION',
        'DATE_RANGE',
        'BULLET_POINT'
    ];

    let fileContent = fs.readFileSync('temp.tex', 'utf8');

    experiences.forEach(exp => {
        experiencePlaceholders.forEach(placeholder => {
            const value = exp[placeholder] || '';
            fileContent = fileContent.replaceAll(`{${placeholder}}`, value);
        });
    });

    return fileContent;
};

const educationParser = (education) => {
    const educationPlaceholders = [
        'UNIVERSITY_NAME',
        'LOCATION',
        'DEGREE',
        'GRADUATION_DATE',
        'GPA'
    ];

    let fileContent = fs.readFileSync('temp.tex', 'utf8');

    education.forEach(edu => {
        educationPlaceholders.forEach(placeholder => {
            const value = edu[placeholder] || '';
            fileContent = fileContent.replaceAll(`{${placeholder}}`, value);
        });
    });

    return fileContent;
};

const skillsParser = (data) => {
    const skillsPlaceholders = [
        'SKILLS_PROGRAMMING',
        'SKILLS_FRAMEWORKS',
        'SKILLS_TOOLS',
        'SKILLS_CERTIFICATIONS'
    ];

    let fileContent = fs.readFileSync('temp.tex', 'utf8');

    skillsPlaceholders.forEach(placeholder => {
        const value = data[placeholder] || '';
        fileContent = fileContent.replaceAll(`{${placeholder}}`, value);
    });

    return fileContent;
};

module.exports = {
    headerParser,
    profileParser,
    experienceParser,
    educationParser,
    skillsParser
};