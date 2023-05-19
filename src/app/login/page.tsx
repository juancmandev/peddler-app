'use client';

import { H1 } from '@/components/Headings';
import { Form, FormSection, Label } from '@/components/Forms';
import { Input } from '@/components/Inputs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PrimaryButton } from '@/components/Buttons';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is equired'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <H1>Login</H1>
      <Form onSubmit={formik.handleSubmit}>
        <FormSection>
          <Label
            onError={formik.touched.email && formik.errors.email}
            htmlFor='email'>
            Email *
          </Label>
          <Input
            id='email'
            type='email'
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onError={formik.errors.email}
            onChange={formik.handleChange}
            onTouched={formik.touched.email}
            placeholder='email@example.com'
          />
        </FormSection>
        <FormSection>
          <Label
            onError={formik.touched.password && formik.errors.password}
            htmlFor='password'>
            Password *
          </Label>
          <Input
            id='password'
            type='password'
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onError={formik.errors.password}
            onChange={formik.handleChange}
            onTouched={formik.touched.password}
          />
        </FormSection>
        <PrimaryButton type='submit'>Login</PrimaryButton>
      </Form>
    </>
  );
}
