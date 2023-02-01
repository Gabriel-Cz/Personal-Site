import { useState } from 'react';
import { NextPage } from "next";
import { Content, Layout } from "../components";
import { PageProps } from "types";
import { ContactForm } from "@components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: NextPage<PageProps> = () => {
  const [isSendLoading, setIsSendLoading] = useState<boolean>(false);
  const [isSendDisabled, setIsSendDisabled] = useState<boolean>(false);
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      subject: '',
      content: ''
    },
    onSubmit: (_values) => { },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      subject: Yup.string(),
      content: Yup.string().required(),
    })
  });
  const handleSend: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      setIsSendLoading(true);
      setIsSendDisabled(true);
      e.preventDefault();
      const formattedEmail = values.email.trim().toLowerCase();
      const payload = {
        emailFrom: formattedEmail,
        subject: values.subject,
        content: values.content,
      }
      const res = await fetch('http://localhost:3000/api/aws', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.status === 500) {
        throw new Error();
      }
      toast.success("The email was successfully sent. We'll be in touch shortly.", {
        theme: 'colored'
      });
    } catch (_error) {
      toast.error("There was an error while tryng to send the email, try again in a few minutes", {
        theme: 'colored'
      });
    } finally {
      setIsSendDisabled(false);
      if (!isSendLoading) setIsSendLoading(false);
    }
  }

  const isFieldInvalid = (value: keyof typeof values) => {
    return (
      typeof errors[value] !== 'undefined'
      && touched[value]
    )
  };

  const getIsSendDisabled = (value: keyof typeof values) => {
    return (
      typeof errors[value] !== 'undefined'
      && !touched[value]
    )
  };

  return (
    <>
      <ToastContainer />
      <Layout>
        <Content>
          <ContactForm
            emailFrom={values.email}
            emailContent={values.content}
            subject={values.subject}
            isInvalidEmail={isFieldInvalid('email')}
            isInvalidContent={isFieldInvalid('content')}
            isSendDisabled={(
              isSendDisabled
              ? true
              : getIsSendDisabled('email') && getIsSendDisabled('content')
            )}
            isSendLoading={isSendLoading}
            onFieldsBlur={handleBlur}
            onEmailChange={handleChange}
            onContentChange={handleChange}
            onSubjectChange={handleChange}
            onSend={handleSend}
          />
        </Content>
      </Layout>
    </>
  )
}

export default Contact;