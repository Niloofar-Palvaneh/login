import Image from 'next/image'
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { FiUserPlus } from "react-icons/fi"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-center w-full h-screen sm:h-auto'>
        <div className='flex w-[80%] justify-center sm:flex-col-reverse sm:w-full ' >

          <div className='bg-white p-8 flex flex-col items-center w-[50%] rounded-l-xl sm:p-0 sm:w-full sm:rounded-none'>
            <div className='m-4 text-4xl font-bold flex gap-4'>
              <span className='text-blue-800'>O</span>
              <span className='text-blue-700'>X</span>
              <span className='text-blue-600'>I</span>
              <span className='text-blue-500'>N</span>
              <span className='text-blue-400'>O</span>
            </div>
            <h2 className='font-bold text-2xl text-gray-700'>Sign Up For Oxino</h2>

            <div className='w-full flex items-center justify-center'>
              <div className='flex flex-col w-[70%] p-2 mt-8 gap-4 w-[80%]'>
                <button className='flex items-center gap-2 border  text-gray-600 justify-center
               px-4 py-2 transition hover:bg-gray-200 hover:border-blue-200 hover:shadow-[0px_0px_2px_2px_#bee3f8]
               bg-gray-100 w-full rounded-xl'>
                  <FcGoogle className='bg-white border text-xl rounded-full' />
                  Sign Up With Google</button>
                <button className='flex items-center gap-2 border  text-gray-600 justify-center 
              px-4 py-2 transition hover:bg-gray-200 hover:border-blue-200 hover:shadow-[0px_0px_2px_2px_#bee3f8]
               bg-gray-100 w-full rounded-xl' >
                  <AiFillGithub className='bg-white border text-xl rounded-full' />
                  Sign Up With Twitter</button>
              </div>
            </div>


            <span className='text-gray-400 relative flex items-center justify-center mt-8'>
              <h3 className='text-gray-500 z-50'>Or Sign up with your e-mail</h3>
              <div className='w-full h-[1px] bg-c absolute top-4'></div>
            </span>

            <form className='mt-4 w-full flex flex-col items-center justify-center'>
              <div className='flex flex-col gap-4 w-[70%]'>
                <input
                  type="email"
                  class="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100 outline-none focus:bg-white"
                  placeholder="Email"
                />
                <input
                  type="password"
                  class="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100 outline-none focus:bg-white"
                  placeholder="Password"
                />
              </div>

              <div className='w-full flex items-center justify-center'>
                <button className='bg-blue-700 transition hover:bg-blue-800 text-white flex items-center gap-2 font-bold text-md rounded-xl mt-4 
                px-4 py-2 w-[70%] justify-center
                '>
                  <FiUserPlus />
                  Sign Up
                </button>
              </div>

            </form>

            <div className='w-full flex items-center justify-center'>
              <div className='w-[80%] sm:w-[95%] text-center sm:flex sm:flex-col-reverse'>
                <div className='text-gray-500 mt-12 sm:mt-2 '>
                  I agree to abide by treact's <Link href={"#"} className='text-blue-700 underline px-[2px]'>Terms of Service</Link>
                  and its <Link href={"#"} className='text-blue-700 underline px-[2px]'>Privacy Policy</Link>
                </div>
                <div className='text-gray-500 mt-2 sm:mt-4'>
                  Already have an account? <Link href={"#"} className='text-blue-700 underline px-[2px]'>Sign In</Link>
                </div>
              </div>
            </div>

          </div>

          <div className='bg-gray-100 p-12 w-[50%] flex items-center justify-center rounded-r-xl sm:p-4 sm:w-full sm:rounded-none '>
            <Image src={"/img.svg"} width={300} height={500} />
          </div>
        </div>
      </div>
    </>
  )
}
