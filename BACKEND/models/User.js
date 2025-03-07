// models/User.js
export class User {
    /**
     * @param {Object} data - User data from database
     * @param {string} data.id - User ID
     * @param {string} data.email - User email
     * @param {string|null} [data.name] - Fullname
     * @param {string} data.created_at - Creation timestamp
     * @param {string} data.updated_at - Update timestamp
     */
    constructor(data) {
      this.id = data.id;
      this.email = data.email;
      this.name = data.name || null;
      this.hashed_password = data.hashed_password || null;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
    
    // Add methods for business logic
    getFullName() {
      return this.name;
    }


    
    // Static method to create from database result
    static fromDB(data) {
      return new User(data);
    }
  }