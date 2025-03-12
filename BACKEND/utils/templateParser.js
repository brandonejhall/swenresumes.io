import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const headerParser = (data) => {
    const headerPlaceholders = [
        'FULL_NAME',
        'EMAIL',
        'PHONE',
        'LOCATION',
        'LINKEDIN',
        'GITHUB'
    ];

    const templatePath = path.join(__dirname, 'templates', 'minimal.tex');
    let fileContent = fs.readFileSync(templatePath, 'utf8');

    headerPlaceholders.forEach(placeholder => {
        const value = data[placeholder] || '';
        fileContent = fileContent
            .replaceAll(`{${placeholder}}`, `{${value}}`)
            .replaceAll(`{${placeholder.replace(/_/g, '\\_')}}`, `{${value}}`);
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
    
    // Find all section parts
    const sectionStart = fileContent.indexOf(expStartMarker);
    const sectionEnd = fileContent.indexOf(expEndMarker) + expEndMarker.length;
    const firstEntryStart = fileContent.indexOf(entryStartMarker, sectionStart);
    
    // Get the section header (including \section{Experience} and \begin{itemize})
    const sectionHeader = fileContent.substring(sectionStart, firstEntryStart);
    
    // Get entry template
    const entryEnd = fileContent.indexOf(entryEndMarker, firstEntryStart) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(firstEntryStart, entryEnd);
    
    // Generate entries
    let allEntries = '';
    experiences.forEach(exp => {
        let entry = entryTemplate;
        experiencePlaceholders.forEach(placeholder => {
            const value = exp[placeholder] || '';
            entry = entry
                .replaceAll(`{${placeholder}}`, `{${value}}`)
                .replaceAll(`{${placeholder.replace(/_/g, '\\_')}}`, `{${value}}`);
        });
        allEntries += entry + '\n';
    });
    
    // Add closing itemize tag
    const sectionFooter = '\n\\end{itemize}\n';
    
    // Combine everything
    return fileContent.substring(0, sectionStart) +
           sectionHeader +
           allEntries +
           sectionFooter +
           expEndMarker +
           fileContent.substring(sectionEnd);
};

const educationParser = (education, fileContent) => {
    const educationPlaceholders = [
        'UNIVERSITY_NAME',
        'LOCATION',
        'DEGREE',
        'GRADUATION_DATE',
        'GPA',
        'BULLET_POINT'
    ];
    
    const eduStartMarker = '% EDUCATION_START';
    const eduEndMarker = '% EDUCATION_END';
    const entryStartMarker = '% ENTRY_START';
    const entryEndMarker = '% ENTRY_END';
    
    // Find all section parts
    const sectionStart = fileContent.indexOf(eduStartMarker);
    const sectionEnd = fileContent.indexOf(eduEndMarker) + eduEndMarker.length;
    const firstEntryStart = fileContent.indexOf(entryStartMarker, sectionStart);
    
    // Get the section header (including \section{Education} and \begin{itemize})
    const sectionHeader = fileContent.substring(sectionStart, firstEntryStart);
    
    // Get entry template
    const entryEnd = fileContent.indexOf(entryEndMarker, firstEntryStart) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(firstEntryStart, entryEnd);
    
    // Generate entries
    let allEntries = '';
    education.forEach(edu => {
        let entry = entryTemplate;
        educationPlaceholders.forEach(placeholder => {
            const value = edu[placeholder] || '';
            entry = entry
                .replaceAll(`{${placeholder}}`, `{${value}}`)
                .replaceAll(`{${placeholder.replace(/_/g, '\\_')}}`, `{${value}}`);
        });
        allEntries += entry + '\n';
    });
    
    // Add closing itemize tag
    const sectionFooter = '\n\\end{itemize}\n';
    
    // Combine everything
    return fileContent.substring(0, sectionStart) +
           sectionHeader +
           allEntries +
           sectionFooter +
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
    
    // Find all section parts
    const sectionStart = fileContent.indexOf(projStartMarker);
    const sectionEnd = fileContent.indexOf(projEndMarker) + projEndMarker.length;
    const firstEntryStart = fileContent.indexOf(entryStartMarker, sectionStart);
    
    // Get the section header (including \section{Projects} and \begin{itemize})
    const sectionHeader = fileContent.substring(sectionStart, firstEntryStart);
    
    // Get entry template
    const entryEnd = fileContent.indexOf(entryEndMarker, firstEntryStart) + entryEndMarker.length;
    const entryTemplate = fileContent.substring(firstEntryStart, entryEnd);
    
    // Generate entries
    let allEntries = '';
    projects.forEach(proj => {
        let entry = entryTemplate;
        projectPlaceholders.forEach(placeholder => {
            const value = proj[placeholder] || '';
            entry = entry
                .replaceAll(`{${placeholder}}`, `{${value}}`)
                .replaceAll(`{${placeholder.replace(/_/g, '\\_')}}`, `{${value}}`);
        });
        allEntries += entry + '\n';
    });
    
    // Add closing itemize tag
    const sectionFooter = '\n\\end{itemize}\n';
    
    // Combine everything
    return fileContent.substring(0, sectionStart) +
           sectionHeader +
           allEntries +
           sectionFooter +
           projEndMarker +
           fileContent.substring(sectionEnd);
};

const generateLatex = (data) => {
    // Create temp directory if it doesn't exist
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

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
    
    // Write final content to temp file
    const tempPath = path.join(tempDir, 'temp.tex');
    fs.writeFileSync(tempPath, latexContent);
    
    return latexContent;
};

export default generateLatex;