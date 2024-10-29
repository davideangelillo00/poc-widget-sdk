import { useEffect, useState } from 'react';
import './App.scss';
import { Drawer, MenuButton, Profile } from './components';
import { Link } from './components/drawer/schema/link';
import { useFetchData } from './services/api';

function App() {
  const [isOpened, setOpened] = useState(false);
  const data = useFetchData('https://catfact.ninja/fact');

  const links: Link[] = [
    { href: 'https://www.google.com?test=1', src: 'https://www.fabrick.com/images/favicon.png', alt: 'App 1' },
    { href: 'https://www.google.com?test=2', src: 'https://cdn.logojoy.com/wp-content/uploads/20220329171724/social-media-app-logo-instagram.jpg', alt: 'App 2' },
    { href: 'https://www.google.com?test=3', src: 'https://cdn.logojoy.com/wp-content/uploads/20220329171710/telegram-app-logo.png', alt: 'App 3' },
  ];

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
