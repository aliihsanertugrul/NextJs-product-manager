import Test from '@/components/dashboard/test'
import ClientComp from '@/components/dashboard/test/client-comp';
import ServerComp from '@/components/dashboard/test/server-comp';
import React from 'react'
export const metadata = {
	title: "Dashboard",
	description: "Luxury furniture for your comfort",
};


const DashboardPage = () => {
  return (
    <div>DashboardPage


      <a href="#" className="nav-link active">Test link</a>

      <Test/>
      
      <ClientComp/>
    </div>
  )
}

export default DashboardPage