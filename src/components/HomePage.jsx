import React from 'react'
import { Link } from 'react-router-dom'

import { buttonVariants } from "@/components/ui/button"


const HomePage = () => {
  return (
    <div className='h-[90vh] flex flex-col gap-2  justify-center items-center'>
      <img className='h-2/3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shahadah-1.svg/1200px-Shahadah-1.svg.png" alt="" />
      <div className='flex gap-2'>
        <Link className={`${buttonVariants({variant:""})}`} to={"quran"}>Qur'on</Link>
        <Link className={`${buttonVariants({variant:""})}`} to={"namaz-times"}>Namoz vaqtlari</Link>
      </div>
    </div>
  )
}

export default HomePage