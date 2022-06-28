import { useState } from 'react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const show = () => {
    document.getElementById("middle").classList.add("hidden")
    document.getElementById("top").classList.add("rotate-45")
    document.getElementById("bottom").classList.add("-rotate-45")
    document.getElementById("top").classList.add("top-[1px]")
    document.getElementById("bottom").classList.add("bottom-[10px]")

    setIsOpen(true)
  }

  const hide = () => {
    document.getElementById("middle").classList.remove("hidden")
    document.getElementById("top").classList.remove("rotate-45")
    document.getElementById("bottom").classList.remove("-rotate-45")
    document.getElementById("top").classList.remove("top-[1px]")
    document.getElementById("bottom").classList.remove("bottom-[10px]")

    setIsOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="w-full pb-4 pt-12 px-4 flex items-center space-x-4
        absolute left-0 top-0 right-0 z-10">

        {/* MoreIcon */}
        <div className="w-6 h-8 flex flex-col justify-evenly bg-transparent" onClick={() => {
          if (isOpen) return hide()
          return show()
        }}>
            <div id="top" className="transition-all duration-500 ease-out relative w-full border border-black"></div>
            <div id="middle" className="w-full border border-black"></div>
            <div id="bottom" className="transition-all duration-300 ease-out relative w-full border border-black"></div>
        </div>

        {/* Magnifying Glass */}
        <div className="relative w-fit h-10">
          <div className="relative top-[7px] w-[20px] h-[20px] rounded-full border-[2px] border-black"></div>
          <div className="relative top-[2px] left-[20px] w-0 h-2 border-[1px] border-black -rotate-45"></div>
        </div>

        <h1 className="flex-1 text-2xl pr-4 text-center font-medium uppercase text-amber-700/60 tracking-[6px]">penrose</h1>

        <div className="relative w-8 h-8 py-0.5 flex justify-center">
          <div className="absolute w-5 h-1/2 top-[5px] border-2 border-black"></div>
          <div className="relative w-4/5 h-[45%] top-[10px] bg-black"></div>
        </div>
      </header>
    </>
  )
}

export default Header
