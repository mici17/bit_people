import { User } from '../entities/User'

const data = () => {
    return fetch(`https://randomuser.me/api/?results=50`)
        .then(response => response.json())
        .then((userdata) => userdata.results.map((userObj) => {
            return new User(userObj)})
        )
        
}

export { data }