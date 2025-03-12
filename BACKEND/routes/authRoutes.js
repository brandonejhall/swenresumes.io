import express from 'express'
import checkForPreviousAnon from '../middleware/authMiddleware.js'
import resumeData from '../test/initial-test-data.js';

const router = express.Router();

router.get("/anon", checkForPreviousAnon, (req, res) => {
    res.json({
      message: "Anonymous session active",
      anonUserId: req.user.id, // Available after middleware
    });
  });


export default router;