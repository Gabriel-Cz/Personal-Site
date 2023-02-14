import { useState } from 'react';
import { GetServerSideProps, NextPage } from "next";
import { Content, Layout } from "../components";
import { PageProps } from "types";
import { ContactForm } from "@components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

const Contact: NextPage<PageProps> = () => {
  const [isSendLoading, setIsSendLoading] = useState<boolean>(false);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm
  } = useFormik({
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

  const onSuccess = () => {
    toast.success("The email was sent successfully. We'll be in touch in a short.", {
      theme: 'colored',
      autoClose: 8000,
      pauseOnHover: true,
      toastId: 'On Sucess Toast'
    });
  }

  const onError = () => {
    toast.error("There was an error, try again in a few minutes. You can still reach me out via gabrielczhz@gmail.com", {
      theme: 'colored',
      autoClose: 8000,
      pauseOnHover: true,
      toastId: 'On Error Toast'
    });
  }

  const handleSend: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      setIsSendLoading(true);
      const formattedEmail = values.email.trim().toLowerCase();
      const res = await fetch(`/api/gmail?type=send`, {
        method: 'POST',
        body: JSON.stringify({
          content: values.content,
          emailFrom: formattedEmail,
          subject: values.subject,
        })
      });
      if (!res.ok || res.status === 500) {
        throw new Error();
      }
      onSuccess();
      resetForm();
    } catch (_error) {
      onError();
    } finally {
      if (!isSendLoading) setIsSendLoading(false);
    }
  }

  const isFieldInvalid = (value: keyof typeof values) => {
    return (
      typeof errors[value] !== 'undefined'
      && touched[value]
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
              isFieldInvalid('email')
              || isFieldInvalid('content')
              || isSendLoading
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