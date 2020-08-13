export class AuthService {

    loggedIn: boolean = false;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 800)
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
        console.log("User Logged In!");

    }

    logout() {
        this.loggedIn = false;
        console.log("User Logged Out!");
    }

}