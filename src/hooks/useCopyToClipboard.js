import React, { useState } from "react"

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async content => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
    } catch (error) {
      setIsCopied(false)
    }
  }

  return { isCopied, copyToClipboard }
}

const CopyToClipboardButton = ({ content }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <div>
      <button
        onClick={() => copyToClipboard(content)}
        className="px-8 py-2 uppercase transition duration-300 border shadow-sm max-w-max hover:shadow-md hover:bg-custom-yellow border-custom-purple"
        style={{
          transition: "transform 0.3s, border-color 0.3s",
        }}
        onMouseEnter={e => {
          e.target.style.borderColor = "transparent"
          e.target.style.transform = "translateY(-3px)"
        }}
        onMouseLeave={e => {
          e.target.style.borderColor = "rgb(175, 159, 212)"
          e.target.style.transform = "translateY(0)"
        }}
      >
        {isCopied ? "copied!" : "copy email"}
      </button>
    </div>
  )
}

export default CopyToClipboardButton
