import React from "react";
import './Drawer.scss';
import { DrawerProps } from "./schema/drawer-props";
import { Link } from "./schema/link";

export const Drawer: React.FC<DrawerProps> = ({
  visible,
  links
}: DrawerProps) => {
  function onClick(link: string): void {
    window.open(link, '_blank')
  }

  return <>
    <div className={`drawer drawer--${visible ? 'visible' : 'hidden'}`}>
      {links.map((link: Link) => 
        <a onClick={() => onClick(link.href)} aria-label={link.alt} className="drawer__link" key={link.href}>
          <img src={link.src} alt={link.alt} className="drawer__link__image"/>
        </a>)}
    </div>
  </>;

}