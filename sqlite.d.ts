//declaration for this Cordova plugin https://github.com/brodysoft/Cordova-SQLitePlugin

interface DBOptions {
    name: string;
    success?: () => any;
    error?: () => any;
}
interface DBResponse extends Object {
    rows: any;
    rowsAffected: number;
    insertId: number;
}
interface SQLiteTransaction {
    db: Database;
    readOnly: boolean;
    executeSql: (sql: string, values?: Array<any>, success?: (tx: SQLiteTransaction, res: DBResponse) => void, error?: (...args) => void) => void;
}
interface Database {
    openargs: any;
    dbname: string;
    openSuccess: (...args) => any;
    openError: (...args) => any;
    databaseFeatures: SQLiteFeatures;
    transaction: (executeCallback: (tx: SQLiteTransaction) => any, errorCallback?: (e) => any, successCallback?: () => any) => any;
    executeSql: (sql: string, values?: Array<any>, success?: (res: DBResponse) => void, error?: (...args) => void) => void;
}
interface SQLiteFeatures extends Object {
    isSQLitePlugin: boolean;
}
interface SQLite extends Object {
    openDatabase: (options: DBOptions) => Database;
    deleteDatabase: (databaseName: string, success: (...args) => any, error: (...args) => any) => any;
    sqliteFeatures: SQLiteFeatures;
}
interface Window {
    sqlitePlugin: SQLite;
}
