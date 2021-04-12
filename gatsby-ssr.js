const React = require('react')
const { Helmet } = require('react-helmet')

const sortHelmet = (x, y) => {
  if (x.props && x.props['data-react-helmet']) {
    return -1
  } else if (y.props && y.props['data-react-helmet']) {
    return 1
  }
  return 0
}
const sortStyle = (a, b) => {
  if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
    return 0
  }

  if (a.type === 'style') {
    return 1
  } else if (b.type === 'style') {
    return -1
  }

  return 0
}
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.sort(sortStyle)
  headComponents.sort(sortHelmet)
  replaceHeadComponents(headComponents)
}

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}
