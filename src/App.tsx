import { useEffect, useState } from 'react';
import './App.scss';
import { Drawer, MenuButton, Profile } from './components';
import { Link } from './components/drawer/schema/link';
import { fetchData } from './services/api';

function App() {
  const [isOpened, setOpened] = useState(false);
  const [data, setData] = useState();

  const links: Link[] = [
    { href: 'http://localhost:4201', src: 'https://www.fabrick.com/images/favicon.png', alt: 'App 1' },
    { href: 'http://localhost:4202', src: 'https://cdn.logojoy.com/wp-content/uploads/20220329171724/social-media-app-logo-instagram.jpg', alt: 'App 2' },
    { href: 'http://localhost:4203', src: 'https://cdn.logojoy.com/wp-content/uploads/20220329171710/telegram-app-logo.png', alt: 'App 3' },
  ];

  useEffect(() => {
    window.addEventListener('load_sdk', () => {
      fetchData('https://catfact.ninja/fact').then((result) => {
        setData(result);
        window.dispatchEvent(new CustomEvent('sdk_loaded'));
      })
    })
  }, [])

  useEffect(() => {
    console.log('[SDK Logger] - SDK made an HTTP call on load. Check the network tab', data);
  }, [data])

  return (
    <article>
      <MenuButton onClick={() => setOpened(!isOpened)}/>
      <Profile/>
      <Drawer visible={isOpened} links={links}/>
    </article>
  );
}

export default App;
