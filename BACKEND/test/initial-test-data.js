import generateLatex from '../utils/templateParser.js'

const resumeData = {
    header: {
        FULL_NAME: 'John Doe',
        EMAIL: 'john@example.com',
        PHONE: '123-456-7890',
        LOCATION: 'New York, NY',
        LINKEDIN: 'johndoe',
        GITHUB: 'johndoe'
    },
    experience: [
        {
            COMPANY_NAME: 'Tech Corp',
            LOCATION: 'San Francisco, CA',
            POSITION: 'Senior Developer',
            DATE_RANGE: '2020-2023',
            BULLET_POINT: 'Led development of key features'
        }
        // ... more experiences
    ],
    education: [
        {
            UNIVERSITY_NAME: 'State University',
            LOCATION: 'College Town, ST',
            DEGREE: 'BS Computer Science',
            GRADUATION_DATE: 'May 2020',
            GPA: '3.8',
            BULLET_POINT: ''
        }
        // ... more education entries
    ],
    projects: [
        {
            PROJECT_NAME: 'Amazing Project',
            PROJECT_LINK: 'https://github.com/johndoe/project',
            TECHNOLOGIES_USED: 'React, Node.js',
            DATE_RANGE: '2022',
            BULLET_POINT: 'Built awesome features'
        }
        // ... more projects
    ]
};


export default resumeData
//const latexContent = generateLatex(resumeData);
// Now you have the complete LaTeX content as a string
