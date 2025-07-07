import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

interface ContactFormProps {
  title?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const [state, handleSubmit] = useForm("mgvkgvqk"); // Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: "",
  });
  const t = useTranslations('services.contactForm');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return <p className="smallcaps">{t('successMessage')}</p>;
  }

  return (
    <div className="contact-page">
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-box">
              <p className="smallcaps">{t('email')}</p>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix={t('validation.email')}
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-box">
              <p className="smallcaps">{t('subject')}</p>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={t('subjectPlaceholder')}
                className="form-input"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix={t('validation.subject')}
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="form-box">
              <p className="smallcaps">{t('message')}</p>
              <textarea
                id="message"
                name="message"
                placeholder={t('messagePlaceholder')}
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix={t('validation.message')}
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="column-center">
              <button
                className="SubBtn"
                type="submit"
                disabled={state.submitting}
              >
                {t('submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
