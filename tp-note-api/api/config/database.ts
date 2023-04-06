import SQLiteDatabase, { Database } from 'better-sqlite3';
let database: Database;

const connection = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('data.db');
        loadDatabase(database);
        return resolve();
    });
}

const loadDatabase = (db: Database): void => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS User
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom VARCHAR NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Quizz
        (   
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Question
        (   
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Reponse
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR NOT NULL,
            isTrue INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS QuestionTheme
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idQuestion VARCHAR NOT NULL,
            idTheme VARCHAR NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ReponseQuestion
        (   
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idReponse VARCHAR NOT NULL,
            idQuestion VARCHAR NOT NULL
        );

        CREATE TABLE IF NOT EXISTS UserTheme
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idUser VARCHAR NOT NULL,
            idTheme VARCHAR NOT NULL,
            Note INTEGER NOT NULL
        );  
    `);
}

export { connection, database };