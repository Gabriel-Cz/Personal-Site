import { Loader } from "@assets/icons";
import { ChangeEventHandler } from "react";
import styles from './ContactForm.module.scss';

interface ContactFormProps {
  emailFrom: string;
  subject: string;
  emailContent: string;
  isInvalidEmail?: boolean;
  isInvalidContent?: boolean;
  isSendDisabled?: boolean;
  isSendLoading?: boolean;
  onEmailChange: ChangeEventHandler<HTMLInputElement>;
  onSubjectChange: ChangeEventHandler<HTMLInputElement>;
  onContentChange: ChangeEventHandler<HTMLTextAreaElement>;
  onSend: React.FormEventHandler<HTMLFormElement>;
  onFieldsBlur: React.FocusEventHandler;
  onEmailCopy: React.MouseEventHandler<HTMLElement>;
}
export const ContactForm: React.FC<ContactFormProps> = ({
  emailFrom,
  subject,
  emailContent,
  isInvalidEmail = false,
  isInvalidContent = false,
  isSendDisabled = true,
  isSendLoading = false,
  onSend,
  onEmailCopy,
  onEmailChange,
  onSubjectChange,
  onContentChange,
  onFieldsBlur,
}) => {
  return (
    <div className={styles.contactFormWrapper}>
      {isSendLoading ? (
        <div className={styles.imgEnvelope}>
          <Loader />
        </div>
      ) : (
        <img className={styles.imgEnvelope} src='/assets/images/Envelope.png' />
      )}
      <div className={styles.contactFormHeader}>
        <h1 className={styles.contactFormTitle}>
          Send Me an Email
        </h1>
        <i className={styles.emailToCopy}>
          Or contact me directly via
          <b onClick={onEmailCopy}> gabrielczhz@gmail.com</b>
        </i>
      </div>
      <form className={styles.contactForm} onSubmit={onSend}>
        <div className={styles.fieldsWrapper}>
          {isInvalidEmail && (
            <span className={styles.errorTooltip}>
              Try writing a valid email address.
            </span>
          )}
          <input
            id="email"
            name="email"
            placeholder="From"
            type="email"
            onBlur={onFieldsBlur}
            onChange={onEmailChange}
            value={emailFrom}
          />
        </div>
        <div className={styles.fieldsWrapper}>
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            type="text"
            onBlur={onFieldsBlur}
            onChange={onSubjectChange}
            value={subject}
          />
        </div>
        <div className={styles.fieldsWrapper}>
          {isInvalidContent && (
            <span className={styles.errorTooltip}>
              Try writing something. The content of the email cannot be empty.
            </span>
          )}
          <textarea
            id="content"
            name="content"
            placeholder="About"
            onBlur={onFieldsBlur}
            rows={10}
            value={emailContent}
            onChange={onContentChange}
          />
        </div>
        <button
          className={styles.sendButton}
          disabled={isSendDisabled}
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  )
}
