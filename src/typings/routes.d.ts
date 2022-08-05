export interface Route {
  path: string;
  component: React.LazyExoticComponent<React.FC>;
  isAuth?: boolean;
}
