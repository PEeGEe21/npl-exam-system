'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { checkIsDesktopMedia, handleRedirect } from '@/app/lib/utils'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowRight2, ArrowRight3 } from 'iconsax-react'

const MainComponent = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Track when component is mounted

    // const { toggle, showMenu } = useContext(MenuContext) || {};
    const showMenu = null;
    const { push } = useRouter();


    // useEffect(() => {
    //   const handleResize = () => setIsDesktop(checkMedia.matches);
    //   checkMedia?.addEventListener(handleResize);
  
    //   return () => checkMedia?.removeEventListener(handleResize);
    // }, []);

    useEffect(() => {
        setIsMounted(true); // Set to true once component mounts

        const handleResize = (e) => setIsDesktop(e.matches);
        setIsDesktop(checkIsDesktopMedia.matches); // Set initial value

        // Correct usage of addEventListener
        checkIsDesktopMedia?.addEventListener('change', handleResize);
    
        return () => checkIsDesktopMedia?.removeEventListener('change', handleResize);
      }, []);


    useEffect(()=>{
        setLoading(true);
        const getUser = async ()=>{
            // Start loading
            try{
                if (localStorage.getItem('exam-system-user')){
                    const data = await JSON.parse(
                        localStorage.getItem("exam-system-user")
                    );
                    setUser(data)
                }
            }catch(err){}
        };
        getUser()
    }, [])

    const start = (role) => {
        // const role = user?.user_role;
        setTimeout(() => {
            handleRedirect(role, push);
        }, 300);
    }
    if (!isMounted) return null; // Prevent render until mounted to avoid mismatch

    return (
        <>
            {/* <Navbar/>
            <section className="px-4 text-center mt-4 sm:mt-10 md:mt-14 xl:mt-20 max-w-6xl mx-auto pb-20">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl xl:text-6xl xl:leading-tight"> 
                    We prepare the best testing experience for you...<br className="hidden sm:inline"/> 
                </h1>
                <div className="relative mt-6 flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-between text-base">
                        <Link className="bg-[#373636] border border-[#373636] text-[#fff] px-6 py-2 text-base rounded-lg" href="/auth/signup">Get Started</Link>
                        
                    </div>
                </div>
                <div className="relative mt-6 flex flex-col items-center justify-center gap-2 rounded-lg">
                    <div className='h-[600px] w-full rounded-lg'>
                        <Image src={'/images/create-test.png'} alt='create-test'  fill className='object-contain object-top w-full h-full rounded-lg' />
                    </div>
                </div>

            </section>
            <Footer/> */}
            <div className='bg-bg-200 relative'>

                <Navbar user={user} start={start} isDesktop={isDesktop}/>

                <div className='h-dvh flex items-center max-w-[1400px] mx-auto w-full'>
                    <section className="px-4 text-center pt-4 mt-14 md:mt-0 sm:pt-10 md:pt-14 xl:pt-20 max-w-full mx-auto pb-20 w-full">
                        <div className='flex items-center flex-col md:flex-row gap-5'>
                            <div className='w-full md:w-5/12 text-center md:text-left'>
                                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl xl:text-6xl xl:leading-tight max-w-lg md:max-w-full mx-auto"> 
                                    We prepare the best testing experience for you...<br className="hidden sm:inline"/> 
                                </h1>
                                <div className="relative mt-6 flex flex-col items-center md:items-start justify-center gap-2">
                                    <div className="flex items-center justify-between text-base">
                                        {isDesktop ?
                                            (
                                                !user ? 
                                                    (
                                                        <Link 
                                                            className="bg-[#008080] border border-[#008080] text-[#fff] px-6 py-2 text-base rounded-lg flex items-center gap-2 min-h-[48px]" 
                                                            href="/auth/signup">
                                                                Get Started <span><ArrowRight size={15} /></span>
                                                        </Link>
                                                    ):( 
                                                        <button 
                                                            type="button"
                                                            onClick={()=>start(user?.user_role)} 
                                                            className="bg-[#008080] border border-[#008080] text-[#fff] px-6 py-2 text-base rounded-lg flex items-center gap-2 min-h-[48px]">
                                                                Continue  <span><ArrowRight size={15}/></span>
                                                        </button>
                                                    )
                                                
                                            ) : ( 
                                                <button
                                                    type="button" 
                                                    className="bg-[#008080] border border-[#008080] text-[#fff] px-6 py-2 text-base rounded-lg flex items-center gap-2 min-h-[48px]">
                                                        Please Use a Laptop/Desktop
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-7/12">
                                <div className="relative mt-6 flex flex-col items-center justify-center gap-2 rounded-lg">
                                    <div className='h-[400px] md:h-[600px] w-full rounded-lg'>
                                        <Image 
                                            src={'/images/homepage/exam-home.png'} 
                                            // src={'/images/create-test.png'} 
                                            alt='create-test'  
                                            priority
                                            fill 
                                            className='object-contain object-center w-full h-full rounded-lg' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
                {/* <section className="flex text-[#373636] h-[90%]">
                    <div className='w-[48%] mt-[140px]'>
                        <h1 className="text-7xl font-semibold">Online Examination</h1>
                        <p className='my-7 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link
                        className="flex justify-center items-center text-white font-medium bg-[#008080] px-6 w-[160px] h-[50px] rounded-[50px]"
                        href="/auth/login"
                        >
                        Learn More</Link>
                    </div>
                    <div className='relative w-[53%]'>
                        <Image
                            src="/images/homepage/exam-home.png"
                            // width={550}
                            // height={550}
                            alt="logo"
                            priority
                            quality={100}
                            fill
                            className="object-cover object-center" 
                        />
                    </div>
                </section> */}
            </div>
            
        </>
    )
}

export default MainComponent
