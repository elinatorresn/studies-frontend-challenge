import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 8px;
    }
  }
`
const DropdownPriorityFilter = styled.ul`
  position: absolute;
  width: 176px;
  padding: 12px 16px;
  position: absolute;
  border-radius: 0.25rem;
  background: white;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
  top: 100%;

  li {
    list-style: none;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    color: var(--text-dark);
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority(props : FilterByPriorityProps){
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen(prev => !prev)

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return(
    <FilterContainer>
      <button onClick={handleOpen}>Organizar por <ArrowIcon/></button>
      {
        isOpen && 
        <DropdownPriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </DropdownPriorityFilter>
      }
    </FilterContainer>
  )
}