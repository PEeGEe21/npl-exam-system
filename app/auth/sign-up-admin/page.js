"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import A4Animation from '@/app/components/motion/Layout';
import { signUpAdminTexts, signUpTexts } from '@/app/lib/constants';
import { LoaderIcon } from '@/app/components/ui/IconComponent';
import { Eye, EyeSlash } from 'iconsax-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { hostUrl } from '@/app/lib/utils';
import toast from 'react-hot-toast';

const SignupAdminPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [staffId, setStaffId] = useState("")
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const createAccount = async () => {
    if(!email){
      toast.error('Please enter email');
      return;
    }

    if(!password){
      toast.error('Please enter password');
      return;
    }

    if(!staffId){
      toast.error('Please enter staff id');
      return;
    }

    if(!phone){
      toast.error('Please enter phone');
      return;
    }
    setLoading(true);


    const data = {
      email,
      password,
      fname: firstName,
      lname: lastName,
      phonenumber: phone,
      staffId,
      username,
    };
    try {
        const response = await axios.post(hostUrl + 'auth/admin-signup', data);
        if (response.data.success){
            toast.success(response.data.message??'Account created successfully!');
            setSuccess('Account created successfully!');
            setError('');
            router.push('/auth/login');
        } else{
            let message = '';
            if (!response.data?.message) {
              message = 'An error occurred';
            } else {
              message = response.data?.message;
            }
            toast.error(message);
        }
        setLoading(false);

    } catch (err) {
        setError('Failed to create account. Please try again.');
        setSuccess('');
        setLoading(false);

        console.error(err);
    }
  };

  return (
        <div className="">
          <div
            className="grid mt-7 mb-6 text-black">
              <A4Animation baseText={'Sign Up As An Admin...'} texts={signUpAdminTexts}/>
          </div>
          <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </div>
          <div className="flex flex-col gap-3 text-gray-700 bg-gradient-to-b  from-bg-200  via-bg-100  to-bg-200  border-[0.5px]  border-border-100  shadow-sm  rounded-[2rem] mt-7  sm:mt-8  mx-auto  pt-5  sm:pt-6  sm:pb-9  pb-6   px-8  sm:px-8 text-sm text-text-100">
            
            <div className="flex flex-col gap-4 pt-6">
              <div className='flex w-full gap-2'>

                <div className="w-1/2">
                  <label className="flex mb-2 font-medium" htmlFor='first_name'>
                    First Name
                  </label>
                  <input
                    id="first_name"
                    className="h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    type="text"
                    name="first_name"
                    required
                    onChange={(e) => {
                      const value = e.target.value
                      setFirstName(value)
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <label className="flex mb-2 font-medium" htmlFor='last_name'>
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    className="h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    type="text"
                    name="last_name"
                    required
                    onChange={(e) => {
                      const value = e.target.value
                      setLastName(value)
                    }}
                  />
                </div>
              </div>
              <div className='flex w-full gap-2'>

              <div className="w-1/2">
                <label className="flex mb-2 font-medium" htmlFor='staffId'>
                  Staff Id
                </label>
                <input
                  id="staffId"
                  className="h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  name="staffId"
                  required
                  onChange={(e) => {
                    const value = e.target.value
                    setStaffId(value)
                  }}
                />
              </div>
              <div className="w-1/2">
                <label className="flex mb-2 font-medium" htmlFor='phone'>
                  Phone Number
                </label>
                <input
                  id="phone"
                  className="h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="tel"
                  name="phone"
                  required
                  onChange={(e) => {
                    const value = e.target.value
                    setPhone(value)
                  }}
                />
              </div>
              </div>
              <div className="w-full">
                <label className="flex mb-2 font-medium" htmlFor='username'>
                  Username
                </label>
                <input
                  id="username"
                  className="h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  name="username"
                  required
                  onChange={(e) => {
                    const value = e.target.value
                    setUsername(value)
                  }}
                />
              </div>
              <div className="w-full">
                <label className="flex mb-2 font-medium" htmlFor='email'>
                  Email
                </label>
                <input
                  id="email"
                  className="h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="email"
                  name="email"
                  required
                  onChange={(e) => {
                    const value = e.target.value
                    setEmail(value)
                  }}
                />
              </div>
              <div className="w-full">
                <label className="flex mb-2 font-medium" htmlFor='password'>
                  Password
                </label>

                <div className="">
                    <div className=" relative rounded-full  items-center w-full">
                        <button type='button' onClick={()=>setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pl-3 flex items-center h-full cursor-pointer">
                            <span className="text-[#BEBDBD] px-3">
                            {!showPassword ?<Eye size={22} />: <EyeSlash size={22}/> }
                            </span>
                        </button>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          required
                          className="block min-w-full px-3 pr-10 h-11 w-full rounded-[7px] border border-border-100/50 focus:border focus:border-border-100 bg-white py-2.5 font-sans text-sm font-normal outline outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          autoComplete="off"
                          onChange={(e) => {
                            const value = e.target.value
                            setPassword(value)
                          }}
                        />
                    </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  className="w-full h-[45px] select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center "
                  type="button"
                  disabled={loading}
                  aria-disabled={loading}
                  onClick={createAccount}>
                    {loading ? (
                      <>
                        <LoaderIcon
                          extraClass="text-white"
                          className="animate-spin"
                        />
                      </>
                    ) : (
                      'Sign Up'
                    )}
                  
                </button>
                <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                  Already have an account?
                  <Link href="/auth/login"
                    className="block ml-1 font-sans text-sm font-bold text-blue-gray-900">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>

            
          </div>
          
        </div>
  )
}

export default SignupAdminPage
