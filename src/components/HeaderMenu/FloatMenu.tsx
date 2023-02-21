import { Link } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-react-intl'
import { useCallback } from 'react'
import * as React from 'react'
import { IntlShape } from 'react-intl/src/types'

import Accordion from '~components/Accordion'
import LinkButton from '~components/LinkButton'
import Logo from '~components/Logo'
import { authorize } from '~utils/auth'

import * as styles from './FloatMenu.module.css'
import { MenuItem } from './index'
import MenuToggle from './MenuToggle'
import ProductListMenu from './ProductList'

type Props = {
  menuList: MenuItem[]
  handleClose: () => void
  intl: IntlShape
}

const FloatMenu: React.FC<Props> = ({ menuList, handleClose, intl }) => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])
  const handleSignUp = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.backgroundWrapper} />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Logo />
          </Link>
          <MenuToggle show handleClick={handleClose} />
        </div>
        <div className={styles.menuWrapper}>
          <Accordion title={intl.formatMessage({ id: 'products' })}>
            <ProductListMenu isMobile />
          </Accordion>
          {menuList.map(item =>
            /^\/(?!\/)/.test(item.link) ? (
              <Link key={item.text} className={styles.menuItem} to={item.link}>
                {item.text}
              </Link>
            ) : (
              <a
                key={item.text}
                target='_blank'
                rel='noreferrer'
                className={styles.menuItem}
                href={item.link}
              >
                {item.text}
              </a>
            )
          )}
          <div className={styles.menuItem}>
            <LinkButton
              label={intl.formatMessage({ id: 'login' })}
              handleClick={handleLogin}
            />
          </div>
          <div className={styles.menuItem}>
            <LinkButton
              label={intl.formatMessage({ id: 'get_started' })}
              handleClick={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default injectIntl(FloatMenu)
