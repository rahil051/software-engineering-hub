"use strict";
class Database {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    static getConnection(type = "pssql") {
        if (!Database.connection) {
            Database.connection = new Database(type);
        }
        return Database.connection;
    }
    someBusinessLogic() {
    }
}
function clientCode() {
    const dbInstance = Database.getConnection();
    const dbInstance2nd = Database.getConnection("mysql");
    if (dbInstance.getType() === dbInstance2nd.getType()) {
        console.log("Singleton works, both variables contain the same instance.");
    }
    else {
        console.log("Singleton failed, variables contain different instances.");
    }
}
clientCode();
//# sourceMappingURL=Singleton.js.map