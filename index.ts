import { GithubApiService } from './GithbApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

let svc = new GithubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username as the argument");
}
else {
    let userName = process.argv[2];
    svc.getUserInfo(userName, (user: User) => {
        svc.getRepos(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}

console.log("hello Git :) ");