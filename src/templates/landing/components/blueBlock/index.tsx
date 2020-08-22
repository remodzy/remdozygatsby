import React from 'react'

import { getColor } from '../../../../utils/colors'
import Button from '../../../../components/button'
import DotsArtifact from '../../../../components/dot'

const colors = getColor({ group: 'main', color: 'primary' })
const styles = {
  root: {
    position: 'relative' as const,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.main,
    padding: '90px 0',
  },
  title: {
    color: '#ffffff',
    fontWeight: 600,
    fontSize: 52,
    lineHeight: '63px',
    textAlign: 'center' as const,
  },
  form: {
    display: 'flex',
    marginTop: 60,
  },
  input: {
    height: 52,
    border: 0,
    borderRadius: 10,
    padding: '1px 10px',
    outline: 'none',
    marginRight: 18,
    flex: 1,
  },
}

export default function BlueBlock() {
  return (
    <div style={styles.root}>
      <div style={{ maxWidth: 610 }}>
        <div style={styles.title}>Field service management software</div>
        <div style={styles.form}>
          <input
            type='text'
            name='email'
            id='email'
            style={styles.input}
            placeholder='Enter your email'
          />
          <Button
            label='Get Started'
            colors={{
              background: '#ffffff',
              text: colors.main,
            }}
            handleClick={() => {}}
          />
        </div>
      </div>
      <DotsArtifact
        top={17}
        left={95}
        columns={4}
        size={5.58}
        gap={27.57}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,1,0,0,
          1,0,0,0,
          0,0,1,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={238}
        left={247}
        columns={4}
        size={6.88}
        gap={32.77}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,1,0,0,
          0,0,0,1,
          0,0,1,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={189}
        right={31}
        columns={5}
        size={8.52}
        gap={40.58}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,0,1,0,0,
          0,0,0,1,0,
          0,1,0,0,0,
          0,0,0,0,0,
        ]}
      />
    </div>
  )
}
