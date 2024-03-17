import Card from './components/Card';
import {feat} from './constants/features'; 

export default function App (){
  
 

  return (
    <main className ="bg-stone-800 max-h-full text-neutral-100 px-10">
      <header className ="grid grid-cols-[60%_40%] max-w-screen-xl mx-auto w-full">
        <div className ="pt-10 flex-col gap-4">
            <h1 className ="text-[52px] leading-[60px] font-bold">
              <span className="bg-gradient-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text font-bold">Vite</span>
              <br></br>
              Next Generation  
              <br />
              Frontend Tooling
            </h1>
            <p className ="text-2xl text-neutral-50/50]">Get ready for a development environment that can finally catch up with you.</p>
            <button>button</button>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-br  from-blue-500 to-purple-600">
          <img 
          src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" 
          alt="vite"
          className="size-40 " />
        </div>
      </header>
      <br />
      <br />
      <br />
      <div className='flex items-center justify-center '>
        <section className="grid grid-cols-3  gap-4 max-w-screen-xl mx-aunto w-full">
          {/*List rendering */}
        {
          feat.map((feat, index) => {
            return(
              <Card
              key={index} 
              emoji= {feat.emoji}
              feature={feat.feature}
              description={feat.description}
             isNew={feat.isNew}
             />
           )
          })
        }
      </section>
      </div>
    </main>
  
  )
}