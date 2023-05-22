'use client';

import { useState } from 'react';
import { H1 } from '@/components/Headings';
import { Form, FormSection, Label } from '@/components/Forms';
import { Input } from '@/components/Inputs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PrimaryButton } from '@/components/Buttons';
import { ShowEye, NotShowEye } from '@/assets/icons';
import { useSupabase } from '@/providers/supabaseProvider';
import { useRouter } from 'next/navigation';
import Tippy from '@tippyjs/react';
import NextLink from '@/components/NextLink';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { supabase } = useSupabase();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            email: email,
          },
        },
      });

      if (!error) router.push('/app/login');
    },
  });

  return (
    <>
      <H1>Sign In</H1>
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
          <FormSection>
            <Label
              onError={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              htmlFor='confirmPassword'>
              Confirm Password *
            </Label>
            <Input
              id='confirmPassword'
              type={showConfirmPassword ? 'text' : 'password'}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onError={formik.errors.confirmPassword}
              onChange={formik.handleChange}
              onTouched={formik.touched.confirmPassword}
              iconChildren={
                <Tippy
                  className='p-2 border-[0.5px] border-slate-400 rounded-md bg-slate-100'
                  content={`${
                    showConfirmPassword ? 'Hide' : 'Show'
                  } confirm password`}>
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? <ShowEye /> : <NotShowEye />}
                  </button>
                </Tippy>
              }
            />
          </FormSection>
          <PrimaryButton type='submit'>Sign In</PrimaryButton>
          <NextLink className='text-sm' href='/app/login'>
            Do you have already an account? Login
          </NextLink>
        </Form>
      </div>
    </>
  );
}
