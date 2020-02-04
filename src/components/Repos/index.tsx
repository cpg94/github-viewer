import React, { FunctionComponent } from 'react';
import Title from '../Title';
import { IRepo } from '../../models/Repo';
import { Repo, Container } from './Repos.css';

interface IReposProps {
    repos: IRepo[];
}

const Repos: FunctionComponent<IReposProps> = ({ repos }) => (
    <Container>
        <Title title="Repositories" />
        {repos && repos.length ? (
            repos.map(repo => <Repo key={repo.full_name}>{repo.name}</Repo>)
        ) : (
            <div>No Repos!</div>
        )}
    </Container>
);

export default Repos;
