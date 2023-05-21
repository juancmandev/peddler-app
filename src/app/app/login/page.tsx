'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { H1 } from '@/components/Headings';
import { Form, FormSection, Label } from '@/components/Forms';
import { Input } from '@/components/Inputs';
import { PrimaryButton } from '@/components/Buttons';
import { ShowEye, NotShowEye } from '@/assets/icons';
import { useFormik } from 'formik';
import { useSupabase } from '@/providers/supabaseProvider';
import * as Yup from 'yup';
import Tippy from '@tippyjs/react';
import NextLink from '@/components/NextLink';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { supabase, session } = useSupabase();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async ({ email, password }) => {
      setLoading(true);
      setErrorMessage('');

      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (data) router.push('/app');

        if (error) setErrorMessage(error.message);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <H1>Login</H1>
      <div className='mx-auto'>
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
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onError={formik.errors.password}
              onChange={formik.handleChange}
              onTouched={formik.touched.password}
              iconChildren={
                <Tippy
                  className='p-2 border-[0.5px] border-slate-400 rounded-md bg-slate-100'
                  content={`${showPassword ? 'Hide' : 'Show'} password`}>
                  <button
                    type='button'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <ShowEye /> : <NotShowEye />}
                  </button>
                </Tippy>
              }
            />
          </FormSection>
          <p className='text-red-400 empty:before:inline-block empty:before:content-[""]'>
            {errorMessage && errorMessage}
          </p>
          <PrimaryButton disabled={loading} type='submit'>
            {loading ? 'Logging in...' : 'Login'}
          </PrimaryButton>
          <NextLink className='text-sm' href='/sign-in'>
            Create an account instead
          </NextLink>
        </Form>
      </div>
    </>
  );
}
