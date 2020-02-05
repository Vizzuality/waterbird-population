import loadable from '@loadable/component';

const AsyncPage = loadable((props) => import(`pages/${props.page}`));

export default AsyncPage;
