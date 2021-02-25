import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { ReactElement, useState } from 'react'
import * as Yup from 'yup'

import Button from '~components/Button'
import { getColor } from '~utils/colors'

import Artifacts from './Artifacts'
import styles from './BlueBlock.module.css'

const colors = getColor({ group: 'main', color: 'primary' })

const initialValues = {
  email: '',
}

const subscribeSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
})

export default function BlueBlock(): ReactElement {
  const [email, setEmail] = useState('')
  const [subscribed, set] = useState(false)

  const subscribe = (email: string) => {
    set(true)
    setEmail(email)
  }
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {subscribed ? `Thank you!` : `Stay up to date with Updates`}
        </div>
        {subscribed && (
          <p className={styles.p}>
            Check your email {email} and confirm your subscription, please
          </p>
        )}
        {!subscribed && (
          <Formik
            initialValues={initialValues}
            validationSchema={subscribeSchema}
            onSubmit={values => {
              subscribe(values.email)
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className={styles.form}>
                <div className={styles.inputWrapper}>
                  <Field
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter your email'
                    className={`${styles.input} ${
                      errors.email && touched.email ? 'input-error' : null
                    }`}
                  />
                  <ErrorMessage
                    name='email'
                    component='span'
                    className={styles.error}
                  />
                </div>

                <div className={styles.buttonWrapper}>
                  <Button
                    type='submit'
                    label='Subscribe'
                    colors={{
                      background: '#ffffff',
                      text: colors.main,
                    }}
                    className={!(dirty && isValid) ? 'disabled-btn' : ''}
                    disabled={!(dirty && isValid)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
      <Artifacts />
    </div>
  )
}
