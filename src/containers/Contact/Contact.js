import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTitle from 'components/PageTitle';
import Background from 'components/Background';
import Loader from 'components/Loader';
import ContactItem from 'components/ContactItem';

import bg from 'images/bg_01.jpg';

import './Contact.scss';

class Contact extends PureComponent {
  render() {
    const { contact } = this.props;
    const { isLoaded } = contact;
    const { phone, email, facebook, linkedin } = contact.data;

    return (
      <div className="page page-last contact-page">
        <Background image={bg} overlayOpacity={0.75} />
        <PageTitle theme="green" title="Get in touch" />
        <Loader isVisible={!isLoaded} />
        {isLoaded && (
          <div className="contact-page__content-wrapper">
            <div className="contact-page__content">
              <div className="contact-page__col contact-page__col--pos-left">
                <ContactItem
                  position="left"
                  icon="phone"
                  text={phone}
                  url={`tel:${phone.replace(/\s/g, '')}`}
                />
                <ContactItem position="left" icon="envelope" text={email} url={`mailto:${email}`} />
              </div>
              <div className="contact-page__col contact-page__col--pos-right">
                <ContactItem position="right" icon="facebook" url={facebook} />
                <ContactItem position="right" icon="linkedin" url={linkedin} />
              </div>
              <div className="contact-page__resume">
                <a href={contact.data.resume.url} target="_blank">
                  <span className="icon-file" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
