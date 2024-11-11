import { DashboardTable } from '@/components/ui/custom/dashboardTable'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center justify-center py-4 px-5 flex-col'>
      <h1 className='text-3xl mb-3 font-bold'>Admin Dashboard</h1>
      <DashboardTable />
    </div>
  )
}

export default Page
