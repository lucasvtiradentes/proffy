import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

interface TeacherItemProps {
  teacher: string;
}
const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/32181918?s=460&u=33515903926c96c56e2ffbbb9104bb9edcbe2fcb&v=4"
          alt="Lucas Vieira"
        />
        <div>
          <strong>{props.teacher}</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolore
        voluptates beatae nulla repellendus nobis, magni unde doloribus commodi
        minima deleniti iure molestiae eaque inventore provident ratione qui
        expedita perspiciatis!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
