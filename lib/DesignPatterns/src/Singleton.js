/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 *
 * In our case, we have created a Database class as a real world example.
 * Whenever we establish a connection to our database throughout the project, we don't want to create
 * a connection every single time, instead we want to return the already available connection for use.
 *
 * checkout: https://refactoring.guru/design-patterns/singleton
 */
class Database {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     *
     * we will write getConnection instead of getInstance, because this method will
     * either create a new connection if not created otherwise return the created one.
     */
    static getConnection(type = "pssql") {
        if (!Database.connection) {
            Database.connection = new Database(type);
        }
        return Database.connection;
    }
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    someBusinessLogic() {
        // ...
    }
}
/**
 * The client code.
 */
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