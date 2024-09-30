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


const TableEducation = () => {
  return (
    <div className="w-full">
    <Table>
    <TableCaption>A list of My Qualifications.</TableCaption>
   
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px] text-3xl">Title</TableHead>
        <TableHead className="w-[100px] text-3xl">Specialization</TableHead>
        <TableHead className="w-[100px] text-3xl">Devision</TableHead>
        <TableHead className="w-[100px] text-3xl text-right">Passing year</TableHead>
      </TableRow>
    </TableHeader>
  
    
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Matriculation</TableCell>
        <TableCell>Science</TableCell>
        <TableCell>2nd</TableCell>
        <TableCell className="text-right">2005</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Intermediate</TableCell>
        <TableCell>Electronics</TableCell>
        <TableCell>1st</TableCell>
        <TableCell className="text-right">2010</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">B Tech</TableCell>
        <TableCell>Electronics</TableCell>
        <TableCell>1st</TableCell>
        <TableCell className="text-right">2013</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">MIT</TableCell>
        <TableCell>Information Technology</TableCell>
        <TableCell>1st</TableCell>
        <TableCell className="text-right">2021</TableCell>
      </TableRow>
    </TableBody>
  </Table></div>
  )
}
export default TableEducation