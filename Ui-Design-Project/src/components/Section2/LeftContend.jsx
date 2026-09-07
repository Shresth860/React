const LeftContend = () => {
  return (
    <div className="w-full md:w-1/2">
      <div className="max-w-4xl text-7xl font-medium leading-[0.85] md:text-8xl">
        <h1>Unpack</h1>
        <h1>Your Style</h1>
        </div>
      <p className="mt-10 max-w-md text-lg leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, fugiat.</p>
      <div className="mt-8 flex items-center gap-3">
        <button className="h-11 rounded-full text-lg bg-orange-500 px-6 text-white">See all <span aria-hidden="true">-&gt;</span></button>
        <button className="h-11 rounded-full  text-lg border border-black px-6">Play video</button>
      </div>
    </div>
  )
}

export default LeftContend