import React from 'react'
import { renderToString } from 'react-dom/server'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const html = renderToString(bodyComponent) 
  const sheets = global.__cmz_sheets
  
  // we only want to inline the styles that appear in the initial render
  const toInline = []
  for (const id in sheets) {
    if (html.indexOf(id) > 0) {
      toInline.push(sheets[id])
    }
  }
  
  setHeadComponents([
    <style
      id='cmz-inlined'
      key='cmz-inlined'
      dangerouslySetInnerHTML={{ __html: toInline.join('\n') }}
    />
  ])
}
