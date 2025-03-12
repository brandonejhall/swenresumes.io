import express from 'express'
import generateLatex from '../utils/templateParser.js'
import resumeData from '../test/initial-test-data.js'


const router = express.Router()

router.post("/generate", (req,res) => {
    
    try {
        const latexContent = generateLatex(resumeData);
        res.json({ success: true, latex: latexContent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

})


export default router;
