class User {
    constructor(userObj) {

        this.name = userObj.name.first;
        this.email = userObj.email;
        this.dob = userObj.dob.date;
        this.photo = userObj.picture.large;

    }

    hideEmail() {
        let firstPart = this.email.slice(0, 3)
        let lastPart = this.email.slice(-15);
        let hiddenEmail = firstPart + "..." + lastPart;
        return hiddenEmail


    }
}
export {
    User
}