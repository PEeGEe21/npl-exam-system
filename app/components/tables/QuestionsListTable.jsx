import React from 'react'
import EmptyState from '../EmptyState';
import Link from 'next/link';
import { Trash } from 'iconsax-react';
import { Pen } from 'lucide-react';

const QuestionsListTable = ({ questions = []}) => {
    return (
        <>
            <div className='shadow-lg'>
                <div className="overflow-x-auto md:overflow-x-auto px-4 text-white scrollbar-change rounded-md">
                    <table className="min-w-full leading-normal table-auto overflow-x-auto relative order-table">
                        <thead className="font-normal">
                            <tr className="text-[#313131]">
                                <th
                                    scope="col"
                                    className="px-5 py-3  border-b border-[#363636]   text-left text-sm   whitespace-nowrap"
                                >
                                    S/N
                                </th>
                                <th
                                    scope="col"
                                    className="px-5 py-3  border-b border-[#363636]   text-left text-sm   whitespace-nowrap"
                                >
                                    Questions
                                </th>
                                <th
                                    scope="col"
                                    className="px-5 py-3 border-b border-[#363636]  text-left text-sm   whitespace-nowrap"
                                >
                                    &nbsp;
                                </th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#A19B99]">
                            {questions?.map((question, index) => (
                                <tr key={index}>
                                    <td className="px-2 py-4 text-base whitespace-nowrap">
                                        <span className="text-[#313131] text-base">
                                            {index + 1}
                                        </span>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap">
                                        <div>
                                            <div>
                                                <p className="text-base text-[#313131]">
                                                    {question.question}
                                                </p>
                                            </div>

                                            <div className="bg-[#bac3d0] text-[#000000de] max-w-fit px-3 py-1 rounded-3xl text-xs inline-flex items-center gap-2 ">
                                                EASY
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td className="px-2 py-4 text-sm whitespace-nowrap">
                                        <div className="text-[#313131] text-xs flex items-center justify-end gap-2 pr-3 flex-row">
                                            <Link href={'/admin/question-bank/'+question.id} className='rounded-md px-2 py-1 bg-[#1c699f] text-white '>
                                                Preview
                                            </Link>
                                            <Link href={'/admin/question-bank/'+question.id} className='flex items-center rounded-md bg-[#acb7ca] border border-[#93a1bb] text-black px-2 py-1 '>
                                                <Pen size={12}/>
                                                Edit
                                            </Link>
                                            <button className='btn p-1 bg-[#e7505a] border border-[#e7505a] rounded text-white font-medium flex items-center'>
                                                <Trash size={12}/>
                                                Delete
                                            </button>
                                        </div>
                                        
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default QuestionsListTable
