import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

interface ContactFormProps {
  title?: string;
}

interface FormData {
  subject: string;
  message: string;
  email: string;
}

interface FormState {
  submitting: boolean;
  succeeded: boolean;
  error: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    message: "",
    email: "",
  });
  const [formState, setFormState] = useState<FormState>({
    submitting: false,
    succeeded: false,
    error: null,
  });
  
  const t = useTranslations('serveis.contactForm');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({
      submitting: true,
      succeeded: false,
      error: null,
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setFormState({
        submitting: false,
        succeeded: true,
        error: null,
      });

      // Reset form data
      setFormData({
        subject: "",
        message: "",
        email: "",
      });

    } catch (error) {
      setFormState({
        submitting: false,
        succeeded: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  if (formState.succeeded) {
    return <p className="smallcaps">{t('successMessage')}</p>;
  }

  return (
    <div className="contact-page">
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="">
          <form className="contact-form" onSubmit={handleSubmit}>
            {formState.error && (
              <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                {formState.error}
              </div>
            )}
            
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
                disabled={formState.submitting}
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
                disabled={formState.submitting}
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
                disabled={formState.submitting}
              />
            </div>
            
            <div className="column-center">
              <button
                className="SubBtn"
                type="submit"
                disabled={formState.submitting}
              >
                {formState.submitting ? t('submittingButton') || 'Sending...' : t('submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
