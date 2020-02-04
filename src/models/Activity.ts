export interface IActivity {
    actor: IActor
    type: string;
    id: number;
    repo: IActivityRepo
}

interface IActor {
    login: string;
    avatar_url: string;
}

interface IActivityRepo {
    name: string;
    url: string
}