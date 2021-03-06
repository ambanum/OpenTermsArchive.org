import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';
import s from './Contributors.module.css';

type ContributorsProps = {
  subtitle?: string;
  type?: 'core' | 'alumnis' | 'contributors' | 'all';
  alignX?: 'left' | 'center' | 'right';
  showInfo?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const coreContributors = [
  {
    login: 'Matti Schneider',
    avatar_url: 'https://www.gravatar.com/avatar/81ee62724136cc42065a0af37aa0edc1',
    html_url: 'https://mattischneider.fr',
  },
  {
    login: 'Nicolas Dupont',
    avatar_url: 'https://avatars.githubusercontent.com/u/1098708?v=4',
    html_url: 'https://github.com/Ndpnt',
  },
  {
    login: 'Clément Biron',
    avatar_url: 'https://avatars.githubusercontent.com/u/364319?v=4',
    html_url: 'https://clementbiron.com',
  },
  {
    login: 'Martin Ratinaud',
    avatar_url: 'https://avatars.githubusercontent.com/u/4191809?v=4',
    html_url: 'https://github.com/martinratinaud',
  },
  {
    html_url: 'https://twitter.com/Elsa_Trujillo_',
    avatar_url: 'https://avatars.githubusercontent.com/u/86837188?v=4',
    login: 'Elsa Trujillo',
  },
];

const alumnisContributors = [
  {
    login: 'Siegrid Henry',
    avatar_url: 'https://avatars.githubusercontent.com/u/49791551?v=4',
    html_url: 'https://github.com/SiegridHenry',
  },
];

const contributors = [
  {
    html_url: 'https://twitter.com/henriverdier',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1359173368436686848/1GNqcMOf_reasonably_small.jpg',
    login: 'Henri Verdier',
  },
  {
    html_url: 'https://twitter.com/marineguillaum',
    avatar_url:
      'https://pbs.twimg.com/profile_images/815851313758085121/oNANphLi_reasonably_small.jpg',
    login: 'Marine Guillaume',
  },
  {
    login: 'Adrien Fines',
    avatar_url: 'https://avatars.githubusercontent.com/u/41912392?v=4',
    html_url: 'https://github.com/AdrienFines',
  },
  {
    login: 'Michiel de Jong',
    avatar_url: 'https://avatars.githubusercontent.com/u/408412?v=4',
    html_url: 'https://github.com/michielbdejong',
  },
  {
    login: 'Lucas Verney',
    avatar_url: 'https://avatars.githubusercontent.com/u/58298410?v=4',
    html_url: 'https://github.com/LVerneyPEReN',
  },
  {
    login: 'Tom Houriez',
    avatar_url: 'https://avatars.githubusercontent.com/u/70654947?v=4',
    html_url: 'https://github.com/THouriezPEReN',
  },
  {
    login: 'Antoine Vernois',
    avatar_url: 'https://avatars.githubusercontent.com/u/765477?v=4',
    html_url: 'https://github.com/avernois',
  },
  {
    html_url: 'https://twitter.com/lvdefranssu',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1435510938979942405/GZUnqvtH_reasonably_small.jpg',
    login: 'Louis-Victor de Franssu',
  },
  {
    html_url: 'https://twitter.com/hureaux',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1784831840/politique-twitter_reasonably_small.jpg',
    login: 'Jeremy Hureaux',
  },
  {
    login: 'Vincent Viers',
    avatar_url: 'https://avatars.githubusercontent.com/u/30295971?v=4',
    html_url: 'https://github.com/vviers',
  },
  {
    login: 'Christian Quest',
    avatar_url: 'https://avatars.githubusercontent.com/u/1202668?v=4',
    html_url: 'https://github.com/cquest',
  },
  {
    login: 'Aaronj Sugarman',
    avatar_url: 'https://avatars.githubusercontent.com/u/82889095?v=4',
    html_url: 'https://github.com/AaronjSugarman',
  },
  {
    login: 'Marius Karnauskas',
    avatar_url: 'https://avatars.githubusercontent.com/u/1094012?v=4',
    html_url: 'https://github.com/karnauskas',
  },
  {
    login: 'GatienH',
    avatar_url: 'https://avatars.githubusercontent.com/u/6501059?v=4',
    html_url: 'https://github.com/GatienH',
  },
  {
    login: 'Marie-Pierre Vidonne',
    avatar_url: 'https://avatars.githubusercontent.com/u/46820105?v=4',
    html_url: 'https://github.com/mvidonne',
  },
  {
    login: 'Stache',
    avatar_url: 'https://sibyll.in/projects/archives/pokemonpicker/img/hhueber.jpg',
    html_url: 'https://github.com/Amustache',
  },
  {
    login: 'Mathilde Saliou',
    avatar_url:
      'https://media-exp1.licdn.com/dms/image/C4D03AQHrR4nDsjZNVQ/profile-displayphoto-shrink_400_400/0/1554215766240?e=1661990400&v=beta&t=EdM3LhTEh_TGi8D6RPQ7LaDrLUdx4NktPMyyXbmOpsA',
    html_url: 'https://twitter.com/mathildsl',
  },
  {
    login: 'Alex Fisher',
    avatar_url: 'https://avatars.githubusercontent.com/u/92438650?v=4',
    html_url: 'https://github.com/afisher3578',
  },
  {
    login: 'Luã Streit',
    avatar_url: 'https://avatars.githubusercontent.com/u/16099301?v=4',
    html_url: 'https://github.com/streitlua',
  },
  {
    login: 'Laurie Liddell',
    avatar_url:
      'https://media-exp1.licdn.com/dms/image/C5603AQF-ny7khaPtPg/profile-displayphoto-shrink_800_800/0/1516048233339?e=1661990400&v=beta&t=l9lxOjqOy7jnXlL6BWnGX1EfcU7hAeLQGBfi-na9D4g',
    html_url: 'https://www.linkedin.com/in/laurie-liddell-bb4278b3/',
  },
  {
    login: 'Raphael Bartlomé',
    avatar_url:
      'https://media-exp1.licdn.com/dms/image/C5603AQFGmLO1irjvdw/profile-displayphoto-shrink_400_400/0/1530358725198?e=1661990400&v=beta&t=vl77fX_ilxbVodun5Z5ZEuh4wEmhhzyPd7OwoMU-L2g',
    html_url: 'https://www.linkedin.com/in/raphael-bartlome-840006164/',
  },
  {
    login: 'Chloé Legendre',
    avatar_url:
      'https://media-exp1.licdn.com/dms/image/C4E03AQFy7U2phf8qxw/profile-displayphoto-shrink_200_200/0/1650896362405?e=1657152000&v=beta&t=fZ01j3WCPWtyhLWcwxrAy2vInTxNd0_AORLkki4qljU',
    html_url: 'https://www.linkedin.com/in/chlo%C3%A9-legendre-2b014a1a6/',
  },
  {
    login: 'Constance Dauvergne',
    avatar_url:
      'https://media-exp1.licdn.com/dms/image/C4D03AQECxLzEKWKrXw/profile-displayphoto-shrink_200_200/0/1605219468099?e=1657152000&v=beta&t=VepazjcCCMNNjZwJgcGsxa1IjjPV2BfUpzEVmqQVTGI',
    html_url: 'https://www.linkedin.com/in/constance-dauvergne-1811a5192/',
  },
];

const getContributorsByType = (type: ContributorsProps['type']) => {
  switch (type) {
    case 'core':
      return coreContributors;
    case 'alumnis':
      return alumnisContributors;
    case 'contributors':
      return contributors;
    case 'all':
    default:
      return [...coreContributors, ...alumnisContributors, ...contributors];
  }
};

const Contributors: React.FC<ContributorsProps> = React.memo(
  ({ subtitle, type = 'all', alignX = 'center', showInfo = false, className, ...props }) => {
    const contributors = getContributorsByType(type);

    return (
      <div
        className={classNames(
          s.contributors,
          s[`contributors__alignX${alignX}`],
          showInfo ? s.contributors__showInfos : null,
          className
        )}
        {...props}
      >
        {subtitle && <h4 className={classNames(s.contributors_subtitle)}>{subtitle}</h4>}
        <div className={s.contributors_items}>
          {contributors.map(({ login, avatar_url, html_url }) => {
            return (
              <div className={s.contributor} key={`${login}`}>
                <Link href={html_url}>
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    className={s.contributor_link}
                    title={login}
                    key={`${login}_link`}
                  >
                    <img
                      className={s.contributor_image}
                      src={avatar_url}
                      alt={login}
                      width={64}
                      height={64}
                    />
                    {showInfo && <div className={s.contributor_info}>{login}</div>}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default Contributors;
