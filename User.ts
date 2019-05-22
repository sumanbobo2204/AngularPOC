import { Repo } from "./Repo";

export class User {
    loginName!: string;
    node_id!: string;
    repoCount!: number;
    followerCount!: number;
    repos?: Repo[];


    constructor(userResponse: any) {
        this.loginName = userResponse.login;
        this.node_id = userResponse.node_id;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }

}