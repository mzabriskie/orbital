import ReactDOM from 'react-dom';
import routes from './config/routes';
import '../public/styles.css';
import 'highlight.js/styles/agate.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(routes, document.getElementById('container'));
