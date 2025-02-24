// src/components/Header.js
import React from "react";

function Header({ name, title, contact }) {
  return (
    <header className="resume-header">
      <div className="header-columns">
        <div className="header-left">
          <h1 className="name">{name}</h1>
          <h2 className="role">{title}</h2>
        </div>
        <div className="header-right">
          <ul className="contact-info">
            {contact.phone && <li>{contact.phone}</li>}
            {contact.email && <li>{contact.email}</li>}
            {contact.website && <li>{contact.website}</li>}
            {contact.location && <li>{contact.location}</li>}
            {contact.github && <li>{contact.github}</li>}
            {contact.linkedin && <li>{contact.linkedin}</li>}
            {contact.twitter && <li>{contact.twitter}</li>}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
