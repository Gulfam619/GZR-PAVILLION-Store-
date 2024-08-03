import React from 'react'
import { DropdownMenu } from "@/components/ui/dropdown-menu"
const Notification = ({open,setOpen}) => {
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen} >
        <div className=" w-[300px] h-[500px] bg-white rounded-lg shadow-2xl">
          <h1 className=' p-3 border-b text-lg font-semibold'>Notifications</h1>  
        </div>
      </DropdownMenu>
    </div>
  )
}

export default Notification
