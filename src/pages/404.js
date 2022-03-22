import asyncComponent from '../@crema/utility/asyncComponent';

export default asyncComponent(() =>
  import('../components/errorPages/Error404/index'),
);
