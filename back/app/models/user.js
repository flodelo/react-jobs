const database = require('../database');

class UserError extends Error {
    constructor(id) {
        super(`No user found with id ${id}`);
    }
};

/**
* @typedef User
* @property {number} id
* @property {string} firstname
* @property {string} lastName
* @property {string} email
* @property {string} password
* @property {string} role
*/

class User {

    static UserError = UserError;

    constructor(data={}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    /**
     * Retrieves all users from database
     * @static
     * @async
     * @returns {Array<User>} all users in database
     * @throws {Error} an error object
     */
     static async findAll() {
        try {
            //console.log(rows);
            const {rows} = await database.query('SELECT * FROM "user"');
            return rows.map(row => new User(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }

    /**
     * Retrieves user existing  from database
     * @static
     * @async
     * @param {number} id 
     * @returns {User} the instance identified with its id
     * @throws {Error} an error object
     */
    static async findOne(id) {
        try {
            const {rows} = await database.query('SELECT * FROM "user" WHERE id =$1', [id]);
            if (rows[0]) {
                return new User(rows[0]);
            } else {
                throw new UserError(id);
            }
         } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }

    /**
    * Adds or updates an instance of User in database if they don't exist
    * @async
    * @returns {User} the inserted or updated instance
    * @throws {Error} An Error object
    */
    async save() {
        try {
            if (this.id) {
                await database.query('SELECT update_user($1)', [this]);
            } else {
                
                const {rows} = await database.query('SELECT id FROM add_user($1)', [this]);
                this.id = rows[0].id;
                return this;
            }
        } catch (error) {

            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
             } else {
                throw error;
            }
           
        }
    }

     /**
     * Deletes a user from database
     * @static
     * @async
     * @param {number} id 
     * @returns {User}} the deleted instance
     * @throws {Error} an error object
     */
      static async findOneAndDelete(id) {
        try {
            const {rows} = await database.query('SELECT * FROM "user" WHERE id=$1', [id]);
            if (rows[0]) {
                await database.query('DELETE FROM "user" WHERE id=$1', [id]);
            } else {
                throw new UserError(id);
            }
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }

        
    
}

module.exports = User;