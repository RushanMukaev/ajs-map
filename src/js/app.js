export default class ErrorRepository {
    constructor(...error) {
        this.errors = new Map();
        error.forEach (
            error => this.errors.set(error.code, error.description)
        )
    }

    translate(error) {
        if(!this.errors.has(error)) {
            return "Unknown error"
        }
        return this.errors.get(error)
    }
}
  