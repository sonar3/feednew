import React from 'react'

export default function MenuIframe() {
  return (
    <iframe
        src={"https://www.vastyle.co.kr"}
        width={"100%"}
        height={"100vh"}
        allowFullScreen
        title="menu"
        style={{
          border: 'none',
        //   maxWidth: '480px',
          margin: '0 auto',
          height: '100vh',
          position:'relative',
        }}
  />
  )
}