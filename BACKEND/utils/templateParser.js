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

    fs.writeFileSync('temp.tex', fileContent);
};


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
    
    // Find the experience section content between markers
    const expStartMarker = '% EXPERIENCE_START';
    const expEndMarker = '% EXPERIENCE_END';
    const entryStartMarker = '% ENTRY_START';
    const entryEndMarker = '% ENTRY_END';
    
    // Extract the template for a single entry
    const startIdx = fileContent.indexOf(entryStartMarker);
    const endIdx = fileContent.indexOf(entryEndMarker) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(startIdx, endIdx);
    
    // Generate content for each experience
    let allEntries = '';
    experiences.forEach(exp => {
        let entry = entryTemplate;
        experiencePlaceholders.forEach(placeholder => {
            const value = exp[placeholder] || '';
            entry = entry.replaceAll(`{${placeholder}}`, value);
        });
        allEntries += entry + '\n';
    });
    
    // Replace the original template entries with all new entries
    const sectionStart = fileContent.indexOf(expStartMarker);
    const sectionEnd = fileContent.indexOf(expEndMarker) + expEndMarker.length;
    const newContent = 
        fileContent.substring(0, sectionStart) +
        expStartMarker +
        allEntries +
        expEndMarker +
        fileContent.substring(sectionEnd);
    
    fs.writeFileSync('temp.tex', newContent);
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
    
    const eduStartMarker = '% EDUCATION_START';
    const eduEndMarker = '% EDUCATION_END';
    const entryStartMarker = '% ENTRY_START';
    const entryEndMarker = '% ENTRY_END';
    
    const startIdx = fileContent.indexOf(entryStartMarker);
    const endIdx = fileContent.indexOf(entryEndMarker) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(startIdx, endIdx);
    
    let allEntries = '';
    education.forEach(edu => {
        let entry = entryTemplate;
        educationPlaceholders.forEach(placeholder => {
            const value = edu[placeholder] || '';
            entry = entry.replaceAll(`{${placeholder}}`, value);
        });
        allEntries += entry + '\n';
    });
    
    const sectionStart = fileContent.indexOf(eduStartMarker);
    const sectionEnd = fileContent.indexOf(eduEndMarker) + eduEndMarker.length;
    const newContent = 
        fileContent.substring(0, sectionStart) +
        eduStartMarker +
        allEntries +
        eduEndMarker +
        fileContent.substring(sectionEnd);
    
    fs.writeFileSync('temp.tex', newContent);
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

const projectsParser = (projects) => {
    const projectPlaceholders = [
        'PROJECT_NAME',
        'PROJECT_LINK',
        'TECHNOLOGIES_USED',
        'DATE_RANGE',
        'BULLET_POINT'
    ];

    let fileContent = fs.readFileSync('temp.tex', 'utf8');
    
    const projStartMarker = '% PROJECTS_START';
    const projEndMarker = '% PROJECTS_END';
    const entryStartMarker = '% ENTRY_START';
    const entryEndMarker = '% ENTRY_END';
    
    const startIdx = fileContent.indexOf(entryStartMarker);
    const endIdx = fileContent.indexOf(entryEndMarker) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(startIdx, endIdx);
    
    let allEntries = '';
    projects.forEach(proj => {
        let entry = entryTemplate;
        projectPlaceholders.forEach(placeholder => {
            const value = proj[placeholder] || '';
            entry = entry.replaceAll(`{${placeholder}}`, value);
        });
        allEntries += entry + '\n';
    });
    
    const sectionStart = fileContent.indexOf(projStartMarker);
    const sectionEnd = fileContent.indexOf(projEndMarker) + projEndMarker.length;
    const newContent = 
        fileContent.substring(0, sectionStart) +
        projStartMarker +
        allEntries +
        projEndMarker +
        fileContent.substring(sectionEnd);
    
    fs.writeFileSync('temp.tex', newContent);
};

module.exports = {
    headerParser,
    profileParser,
    experienceParser,
    educationParser,
    skillsParser,
    projectsParser
};