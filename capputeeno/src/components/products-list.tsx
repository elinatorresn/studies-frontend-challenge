"use client"
import { UseProducts } from "@/hooks/useProducts"

interface ProductsListProps {

}
export function ProductsList(props : ProductsListProps){
  const { data } = UseProducts()
  console.log(data)
  return(
      <></>
  )
}