import { ErrorMessage, Field, Form, Formik } from 'formik'
import { injectIntl } from 'gatsby-plugin-react-intl'
import React, { useState } from 'react'
import { IntlShape } from 'react-intl/src/types'
import * as Yup from 'yup'

import Button from '~components/Button'
import { getColor } from '~utils/colors'

import Artifacts from './Artifacts'
import * as styles from './BlueBlock.module.css'

const colors = getColor({ group: 'main', color: 'primary' })

const initialValues = {
  email: '',
}

const subscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is required'),
})

type Props = {
  intl: IntlShape
}
const BlueBlock: React.FC<Props> = ({ intl }) => {
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
          {subscribed
            ? intl.formatMessage({ id: 'thank_you' })
            : intl.formatMessage({ id: 'stay_up_to_date' })}
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
                  <ErrorMessage
                    name='email'
                    component='span'
                    className={styles.error}
                  />
                  <Field
                    type='email'
                    name='email'
                    id='email'
                    placeholder={intl.formatMessage({ id: 'enter_your_email' })}
                    className={`${styles.input} ${
                      errors.email && touched.email ? 'input-error' : null
                    }`}
                  />
                </div>

                <div className={styles.buttonWrapper}>
                  <Button
                    type='submit'
                    label={intl.formatMessage({ id: 'subscribe' })}
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

export default injectIntl(BlueBlock)
