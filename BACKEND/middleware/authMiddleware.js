import supabase from "../config/db.js";

const checkForPreviousAnon = async (req, res, next) => {
  try {
    // Check for existing session
    const { access_token, refresh_token } = req.cookies;
    
    if (access_token) {
      // Set the session in Supabase client
      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token
      });
      
      if (!error) {
        // Valid session exists
        req.user = data.user;
        return next();
      }
      // Session invalid, continue to create new one
    }
    
    // Create new anonymous session
    const { data, error } = await supabase.auth.signInAnonymously();
    
    if (error) throw error;
    
    // Set auth cookies
    setAuthCookies(res, data.session);
    
    // Attach user to request
    req.user = data.user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(500).json({ error: "Authentication failed" });
  }
};

const setAuthCookies = (res, session) => {
  // Set access token
  res.cookie("access_token", session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict", 
    maxAge: 3600 * 1000 // 1 hour
  });
  
  // Set refresh token if available
  if (session.refresh_token) {
    res.cookie("refresh_token", session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 30 * 24 * 3600 * 1000 // 30 days
    });
  }
};

export default checkForPreviousAnon;