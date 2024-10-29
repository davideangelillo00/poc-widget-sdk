import React, { KeyboardEvent } from "react";
import menuIcon from '../../assets/menu-icon.svg';
import './MenuButton.scss';

type MenuButtonProps = {
  onClick: () => void
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }: MenuButtonProps) => {
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>): void {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  return <>
    <button className="menu-button" onClick={onClick} onKeyDown={onKeyDown}>
      <img src={menuIcon} height="25" width="25" alt="menu"/>
    </button>
  </>
}