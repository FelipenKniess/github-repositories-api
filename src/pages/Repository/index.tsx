import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link} from 'react-router-dom';
import api from '../../services/api';
import {RotateSpinner} from 'react-spinners-kit';

import { TopPage, User, StatsRepository, Issues, Loading} from './styles';
import Logo from '../../assets/Logo.svg';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

interface RepositoryParams {
    repository: string;
}


interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }

}

const Repositorie:React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    const [repository, setRepository] = useState<Repository | null >(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect( () => {
        // api.get<Repository>(`repos/${params.repository}`).then((response) => {
        //     setRepository(response.data);
        // });

        // api.get<Issues[]>(`repos/${params.repository}/issues`).then((response) => {
        //     setIssues(response.data);
        // });

        async function loadIssues():Promise<void>{
            const [repository, issues] = await Promise.all([
                api.get<Repository>(`repos/${params.repository}`),
                api.get<Issue[]>(`repos/${params.repository}/issues`)
            ])

            setRepository(repository.data);
            setIssues(issues.data);
        }

        loadIssues();
    }, [params.repository]);

    return (
        <>
            <TopPage className="logo-comeback">
                <img src={Logo} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronLeft size={20} />
                    <span>Voltar</span>
                </Link>
            </TopPage>

            {repository ? (
                <>
                    <User>
                        <img src={repository.owner.avatar_url} alt="Avatar"/>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </User>
                    <StatsRepository>
                        <div>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </div>
                        <div>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </div>
                        <div>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </div>
                    </StatsRepository>
                </>
            ): (
                <Loading>
                    <RotateSpinner />
                </Loading>
            )}

            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url} target="_blank">
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={25} />
                    </a>
                ))}
            </Issues>
        </>
    )
};

export default Repositorie;