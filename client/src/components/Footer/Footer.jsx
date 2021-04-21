import React from 'react';
import facebook from '../../assets/Icons/fb.png';
import instagram from '../../assets/Icons/instagram.png';
import twitter from '../../assets/Icons/twitter.png';
// import adventurer from '../../assets/Images/Logo.png';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const contactUs = [
    {
      id: 1,
      name: 'Roberto Manzano',
      role: 'Ultimate Dungeon Master',
      address: '9645 archon st, Mount Celestial ',
      email: 'robertodev@adventurer.com'
    },
    {
      id: 2,
      name: 'Roberto Alejandro',
      role: 'Lead Developer',
      address: '3944 Terrasque Ave, Prime M. Plane',
      email: 'primalchaos@adventurer.com'
    },
    {
      id: 3,
      name: 'Roberto Pina',
      role: 'Back End Specialist',
      address: '999, Lady of Pain blvd, Sigil, Sigil',
      email: 'notwelcomed@adventurer.com'
    }
  ];

  const icons = [
    {
      path: { pathname: 'https://www.facebook.com/' },
      icon: facebook
    },
    {
      path: { pathname: 'https://www.instagram.com/' },
      icon: instagram
    },
    {
      path: { pathname: 'https://twitter.com/?lang=en' },
      icon: twitter
    }
  ];

  return (
    <footer className="footer">
      <article className="footer__social">
        <div className="footer__social--wrapper">
          <h2 className="footer__social--title">Get In Touch</h2>
          <figure className="footer__social--icon-wrapper">
            {icons.map((icon) => {
              return (
                <Link
                  className="footer__social--icon"
                  to={icon.path}
                  target="_blank"
                >
                  <img
                    className="footer__social--img"
                    src={icon.icon}
                    alt="Instagram"
                  />
                </Link>
              );
            })}
          </figure>
        </div>
      </article>
      <article className="footer__info">
        {contactUs.map((people) => {
          return (
            <div key={people.id} className="footer__info--wrapper">
              <h4 className="footer__info--title">{people.name}</h4>
              <h5 className="footer__info--subtitle">{people.role}</h5>
              <address className="footer__info--address">
                {people.address}
              </address>
              <Link
                className="footer__info--email"
                to={{ pathname: 'mailto:robertodev@adventurer.com' }}
                target="_blank"
              >
                {people.email}
              </Link>
            </div>
          );
        })}
      </article>
      <small className="footer__copyright">
        Copyright Adventurer <span>&#169;</span> 2018 All Rights Reserved
      </small>
    </footer>
  );
}

export default Footer;
