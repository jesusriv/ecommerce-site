import photos from '../assets/women.json'
 
const Landing = () => {
  return (
    <>
      <div className="h-[580px] hidden md:block"></div>
      <div className="h-[580px] w-screen md:absolute md:left-0 md:top-0 md:right-0">
        <img  
          className={`object-cover max-h-full min-w-full`} 
          src="https://images.unsplash.com/photo-1627082110973-74cbabcd52d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="main"
        ></img>
      </div>

      <div className="uppercase h-[60px] mt-4 w-full flex justify-center items-center">
        <h1 className='text-3xl tracking-[25px] text-black/80 font-light'>SEASON6</h1>
      </div>

      {/* Item Scroll */}
      <div className="w-full h-fit px-6 py-8 text-black flex justify-start
                        space-x-8 srollbar-default overflow-x-auto md:space-x-12">
        {photos.map((p, i) => {
          if (i < 4) return
          return (
            <div className="h-[500px] w-[300px] shrink-0" key={i}>
              <div className="h-[450px] w-full flex justify-center shadow-lg shadow-black/25" key={i}>
                <img className="object-cover max-h-full w-full" src={p.url} alt="grid"></img>
              </div>
              <p className="text-[9px] tracking-[2px] mt-[4px] uppercase">{p.name}</p>
              <p className="text-xs tracking-[1px] font-medium">{p.price}</p>
            </div>
          )
        })}
        <div className='w-10 h-full border-2 border-transparent'></div> 
      </div>
    </>
  )
}

export default Landing;
