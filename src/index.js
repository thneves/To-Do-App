import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let h1 = document.createElement('h1');
h1.classList.add('text-primary');
h1.classList.add('test');
h1.innerHTML = 'Hello';

document.body.appendChild(h1);