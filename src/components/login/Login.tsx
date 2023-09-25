import { useForm } from 'react-hook-form'

interface DataBase{
  email:string;
  password:string;
}




function Login() {
  const form = useForm<DataBase>({
    defaultValues:{
      email:"",
      password:""
    },
    mode:'onTouched'
  })
  const{register,handleSubmit,formState,reset}=form;
  const {errors,isDirty,isValid} = formState;
  const onSubmit =async (dataa : DataBase) =>{
    // console.log("Form Submited",dataa);
    // let response = await fetch("http://localhost:8080/assessment", { 
    //   method: "POST",
    // });
    
    // let data = await response.text();
    console.log(dataa);
    
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
        <input type="text"  id='firstName' {...register("email" ,{
          required:{
            value:true,
            message:"Please Enter your email"
          }
        })} />
        <p style={{color:"white",background:"red",display:"block"}}>{errors.email?.message}</p>


        <label htmlFor="password">Password</label>
        <input type="password" id='lastName' {...register("password",{
          required:{
            value:true,
            message:"Please Enter your email"
          }
        })}/>
        <p>{errors.password?.message}</p>



        <button type='submit' disabled={!isDirty || !isValid} >Click me</button>
        <button type='button' onClick={() => reset()}>Rest</button>


      </form>
    </div>
  )
}

export default Login