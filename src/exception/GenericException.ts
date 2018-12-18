export default class GenericException extends Error {

    public statusCode;
    constructor(name: string, msg: string, statusCode = 500) {
      super(msg);
      this.statusCode = statusCode;
      this.name = name;
  
      Object.setPrototypeOf(this, GenericException.prototype);
    }
  
    formatError() {
      return {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode
      }
    }
  }