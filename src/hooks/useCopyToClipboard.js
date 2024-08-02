import React, { useState } from "react"

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async content => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      console.log("Copied to clipboard:", content)
    } catch (error) {
      setIsCopied(false)
      console.error("Unable to copy to clipboard:", error)
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
        className="px-8 py-2 text-green-600 uppercase transition duration-300 border border-green-600 shadow-sm max-w-max hover:shadow-md"
      >
        {isCopied ? "Copied!" : "Copy Email"}
      </button>
    </div>
  )
}

export default CopyToClipboardButton
