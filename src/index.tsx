import { createRoot } from 'react-dom/client';
import App from './App';

const container: any = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
