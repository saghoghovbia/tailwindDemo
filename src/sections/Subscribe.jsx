import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className=" max-container
    justify-between items-center
   max-lg:flex-col gap-10"
    id="contact-us">
        <h3 className="font-bold text-4xl leading-[68px]
         font-palanquin text-center">
       Sign Up for <span className="
       text-coral-red">Updates </span>
       & Newsletter 
        </h3>
      <div className="
        w-full flex items-center
        max-sm:flex-col gap-5 p-2.5
        sm:border sm:border-slate-gray
        rounded-full my-5">
          <input type="text"
          placeholder="subscribe@nike.com" 
          className="input"/>
          <div className=" max-sm:justify-end
        items-center max-sm:w-full gap-4">
          <Button 
        label="Sign Up"
        fullWidth
        />
        </div>
       </div>
       
      
    </section>
  )
}

export default Subscribe

/*max-container
     justify-between items-center
    max-lg:flex-col gap-10*/