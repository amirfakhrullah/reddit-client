import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './lib/scrollToTop';
import Skeleton from './components/Skeleton';

const HomePage = React.lazy(() => import('./pages/home'));
const PostPage = React.lazy(() => import('./pages/post'));
const SubredditPage = React.lazy(() => import('./pages/subreddit'));
const SubredditsPage = React.lazy(() => import('./pages/subreddits'));
const ProfilePage = React.lazy(() => import('./pages/profile'));

interface IRoutes {
  path: string;
  page:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.LazyExoticComponent<React.FC<{}>>;
}

// TODO: Improve app routing paths with some that make more sense :-/
const appRoutes: IRoutes[] = [
  {
    path: '/',
    page: HomePage,
  },
  {
    path: '/filter/:filterBy',
    page: HomePage,
  },
  {
    path: '/post/:subredditName/comments/:id',
    page: PostPage,
  },
  {
    path: '/subreddit/:subredditName',
    page: SubredditPage,
  },
  {
    path: '/subreddits/',
    page: SubredditsPage,
  },
  {
    path: '/profile/:userName',
    page: ProfilePage,
  },
];

const Routes = () => {
  return (
    <React.Suspense fallback={<Skeleton />}>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            {appRoutes.map(({ path, page }, idx) => (
              <Route
                path={path}
                component={page}
                exact
                key={`${path}-${idx}`}
              />
            ))}
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Routes;
