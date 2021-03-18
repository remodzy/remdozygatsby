'use strict'

exports.onClientEntry = (_, { zendeskKey, enableDuringDevelop = true }) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'enableDuringDevelop is set to false - gatsby-plugin-zendesk-chat will not load in development mode'
    )
    return null
  }

  if (!zendeskKey) {
    console.log(
      'No Zendesk key provided! gatsby-plugin-zendesk-chat will not load. Please add zendeskKey in gatsby-config.js'
    )
    return null
  }

  setTimeout(() => {
    const script = document.createElement('script')
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`
    script.id = 'ze-snippet'
    script.key = 'gatsby-plugin-zendesk-chat'
    script.async = true
    document.body.appendChild(script)
  }, 5000)
}
