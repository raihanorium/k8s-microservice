import './style.css'
import {fetchData} from './api';

fetchData(import.meta.env.VITE_USER_MANAGER_API_URL)
    .then(data => {
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div>
        <h1>User Manager</h1>
        <hr>
        <h2>Fetched Data:</h2>
        <div>${data}</div>
      </div>
    `;
    })
    .catch(error => {
      console.error('Error:', error);
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div>
        <h1>User Manager</h1>
        <hr>
        <p style="color: red;">Failed to fetch data.</p>
      </div>
    `;
    });
