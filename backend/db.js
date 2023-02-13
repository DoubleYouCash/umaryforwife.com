const db = require('better-sqlite3')('./database.db');

/**
 * Databae Handler Class designed to handle all personal and relationship information required for the website
 *
 * @author Wyatt Duberstein
 */

class database {

    constructor() {

        // TODO Add more elements to user
        let stmt = db.prepare('CREATE TABLE IF NOT EXISTS user(' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
            'email VARCHAR(100) NOT NULL, ' +
            'username VARCHAR(50) NOT NULL, ' +
            'password VARCHAR(50) NOT NULL, ' +
            'crateDate DATETIME NOT NULL, ' +
            'strikes INTEGER NOT NULL, ' +
            'profilePicture VARCHAR(50) NOT NULL, ' +
            'matches INTEGER NOT NULL' +
            ');');
        stmt.run();

        // TODO Add Other fields

        console.log("Opened database");

    }



}