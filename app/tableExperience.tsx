import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


const TableExperience = () => {
  return (
    <div className="w-full">
    <Table>
    <TableCaption>A list of My Experiences.</TableCaption>
   
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px] text-3xl">Title</TableHead>
        <TableHead className="w-[100px] text-3xl">Company</TableHead>
        <TableHead className="w-[100px] text-3xl">Role Description</TableHead>
        <TableHead className="w-[100px] text-3xl text-center">Duration</TableHead>
      </TableRow>
    </TableHeader>
  
    
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Software Engineer</TableCell>
        <TableCell>Leads Pharma Ceuticals pvt(ltd)</TableCell>
        <TableCell>In this tenior I would work on ERP systems of company which based on webForms and asp.net mvc.</TableCell>
        <TableCell className="text-center"> Jan 2022 To Jan 2023</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Developer</TableCell>
        <TableCell>First Fix</TableCell>
        <TableCell>In this tenior I would work on ERP systems of company which based on mern stack and also thier landing pages in next js.</TableCell>
        <TableCell className="text-center"> Jan 2023 To Jully 2024</TableCell>
      </TableRow>
    
    </TableBody>
  </Table></div>
  )
}
export default TableExperience