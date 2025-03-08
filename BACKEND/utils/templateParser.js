const fs = require('fs');
const path = require('path');

const headerParser = (data) => {
    const headerPlaceholders = [
        'FULL_NAME',
        'EMAIL',
        'PHONE',
        'LOCATION',
        'LINKEDIN',
        'GITHUB'
    ];

    const filePath = path.join('BACKEND/utils/templates', 'minimal.tex');
    let fileContent = fs.readFileSync(filePath, 'utf8');

    headerPlaceholders.forEach(placeholder => {
        const value = data[placeholder] || '';
        fileContent = fileContent.replaceAll(`{${placeholder}}`, value);
    });

    return fileContent;
};

const experienceParser = (experiences, fileContent) => {
    const experiencePlaceholders = [
        'COMPANY_NAME',
        'LOCATION',
        'POSITION',
        'DATE_RANGE',
        'BULLET_POINT'
    ];
    
    const expStartMarker = '% EXPERIENCE_START';
    const expEndMarker = '% EXPERIENCE_END';
    const entryStartMarker = '% ENTRY_START';
    const entryEndMarker = '% ENTRY_END';
    
    const startIdx = fileContent.indexOf(entryStartMarker);
    const endIdx = fileContent.indexOf(entryEndMarker) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(startIdx, endIdx);
    
    let allEntries = '';
    experiences.forEach(exp => {
        let entry = entryTemplate;
        experiencePlaceholders.forEach(placeholder => {
            const value = exp[placeholder] || '';
            entry = entry.replaceAll(`{${placeholder}}`, value);
        });
        allEntries += entry + '\n';
    });
    
    const sectionStart = fileContent.indexOf(expStartMarker);
    const sectionEnd = fileContent.indexOf(expEndMarker) + expEndMarker.length;
    
    return fileContent.substring(0, sectionStart) +
           expStartMarker +
           allEntries +
           expEndMarker +
           fileContent.substring(sectionEnd);
};

const educationParser = (education, fileContent) => {
    const educationPlaceholders = [
        'UNIVERSITY_NAME',
        'LOCATION',
        'DEGREE',
        'GRADUATION_DATE',
        'GPA'
    ];
    
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
    
    return fileContent.substring(0, sectionStart) +
           eduStartMarker +
           allEntries +
           eduEndMarker +
           fileContent.substring(sectionEnd);
};

const projectsParser = (projects, fileContent) => {
    const projectPlaceholders = [
        'PROJECT_NAME',
        'PROJECT_LINK',
        'TECHNOLOGIES_USED',
        'DATE_RANGE',
        'BULLET_POINT'
    ];
    
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
    
    return fileContent.substring(0, sectionStart) +
           projStartMarker +
           allEntries +
           projEndMarker +
           fileContent.substring(sectionEnd);
};

const generateLatex = (data) => {
    // Start with header section
    let latexContent = headerParser(data.header);
    
    // Process each section in sequence
    if (data.experience) {
        latexContent = experienceParser(data.experience, latexContent);
    }
    
    if (data.education) {
        latexContent = educationParser(data.education, latexContent);
    }
    
    if (data.projects) {
        latexContent = projectsParser(data.projects, latexContent);
    }
    
    return latexContent;
};

module.exports = {
    generateLatex
};