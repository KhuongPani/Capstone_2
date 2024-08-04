import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Register.scss'; 

const Register = () => {
  const initialValues = {
    email: '',
    password: '',
    name: '',
    phone: '',
    gender: true,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    name: Yup.string().required('Required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Required'),
    gender: Yup.boolean().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post('https://shop.cyberlearn.vn/api/Users/signup', values)
      .then(response => {
        console.log('User registered successfully:', response.data);
        resetForm();
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="form-check">
                <Field type="radio" name="gender" value="true" className="form-check-input" />
                <label className="form-check-label" htmlFor="gender">
                  Male
                </label>
              </div>
              <div className="form-check">
                <Field type="radio" name="gender" value="false" className="form-check-input" />
                <label className="form-check-label" htmlFor="gender">
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
