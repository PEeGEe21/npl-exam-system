"use client";
import CreateQuestionsForm from '@/app/components/Forms/CreateQuestionsForm'
import { ArrowLeft } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { questions } from '@/app/lib/constants';
import { useSearchParams } from 'next/navigation';

const CreateQuestion = () => {
  const [pageTitle, setPageTitle] = useState("Create");

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  useEffect(()=>{
      if(id){
          setPageTitle('Update');
      }
  }, [id]);

  const questions = [
    {
      id: 1,
      questionType: 1,
      question: "What is the capital of France?",
      qDifficulty: 2,
      answers: [
        { id: 1, content: "Paris", isCorrect: true },
        { id: 2, content: "London", isCorrect: false },
        { id: 3, content: "Berlin", isCorrect: false },
        { id: 4, content: "Madrid", isCorrect: false }
      ]
    },
    {
      id: 2,
      questionType: 2,
      question: "The Earth is flat.",
      qDifficulty: 1,
      answers: [
        { id: 1, content: "True", isCorrect: false },
        { id: 2, content: "False", isCorrect: true }
      ]
    },
    {
      id: 3,
      questionType: 1,
      question: "Which planet is known as the Red Planet?",
      qDifficulty: 3,
      answers: [
        { id: 1, content: "Mars", isCorrect: true },
        { id: 2, content: "Jupiter", isCorrect: false },
        { id: 3, content: "Saturn", isCorrect: false },
        { id: 4, content: "Venus", isCorrect: false }
      ]
    },
  ]

  return (
    <>
        <div>
            <div className="flex flex-row items-center justify-start gap-8 mb-8">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex items-center gap-2 w-auto whitespace-nowrap py-2 px-3 bg-[#313131] text-white rounded-md"
                  >
                    <ArrowLeft />
                  </button>

                  <div className="w-full">
                    <h1 className=" whitespace-nowrap text-2xl font-medium lg:text-4xl">{pageTitle} Question</h1>
                  </div>
                </div>

            <CreateQuestionsForm id={id} />
        </div>
    </>
  )
}

export default CreateQuestion
