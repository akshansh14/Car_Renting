"use client"
import React, { Fragment } from 'react'
import { CarProps } from '@/types'
import Image from 'next/image';
import { Dialog , Transition } from '@headlessui/react';   // Dialog will help to create POP up when we click on view-more Blue button .. 
// import { generateCarImageUrl } from '@/utils';
import { SearchManufacturerProps } from '@/types';
// And Transition will help us to provideo smooth transition while opening the Dialog


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () =>void;
    car: CarProps;
}



// console.log("Carprops ");

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
    const carImage="/cars/"+car.make+".png";
    
    console.log("car-Details Link",carImage)
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child 
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            >
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex items-center justify-center min-h-full p-4 text-center'>
                        <Transition.Child 
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] p-6 overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                            
                            <button type='button' 
                            className='absolute p-2 rounded-full top-2 right-2 z-1 w-fit bg-primry'
                            onClick={closeModal}>
                                <Image src="/close.svg" alt='close' width={20} height={20} className='object-contain' />
                            </button>
                            <div className='flex flex-col flex-1 gap-3'>
                                <div className='relative w-full h-40 bg-center bg-cover rounded-lg bg-pattern'>
                                <Image src={carImage} alt='car model'  fill priority className='object-contain' />
                                </div>
                                <div className='flex gap-3'>
                                <div className='relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100'>
                                    <Image src={carImage} alt='car model' fill priority className='object-contain filter sepia grayscale ' /> 
                                </div>
                                <div className='relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100'>
                                    <Image src={carImage} alt='car model' fill priority className='object-contain filter ' /> 
                                </div>
                                <div className='relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100'>
                                    <Image src={carImage} alt='car model' fill priority className='object-contain filter grayscale ' /> 
                                </div>
                                </div>            
                                </div>
                                <div className='flex flex-col flex-1 gap-2'>
                                    <h2 className='text-xl font-semibold capitalize'>
                                        {car.make} {car.model}
                                    </h2>
                                        <div className='flex flex-wrap gap-4 mt-3'>
                                            {Object.entries(car).map(([key,value])=>(
                                                <div className='flex justify-between w-full gap-5 text-right' key={key}> 
                                                    <h4 className='capitalize text-grey'>{key.split("_").join(" ")}</h4>
                                                    <p className='font-semibold text-black-100' >{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                </div>
                                
                        </Dialog.Panel>
                    </Transition.Child>
                </div>

            </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails