import * as request from 'request'
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: {
        'User-Agent':'request'
    },
    json: true
}

export class GithubApiService {

    getUserInfo(userName: string, cb: (user: User) => any) {        
        request.get("https://api.github.com/users/" + userName, OPTIONS, (err: any, response: any, body: any) => {                   
                    let user = new User(body);
                    //console.log(user);
                    cb(user);
        })
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (err: any, response: any, body: any) => {                   
                    cb(body.map((r: any) => new Repo(r)));
        })
    }


}