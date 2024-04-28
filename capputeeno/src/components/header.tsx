import styled from "styled-components"

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    paddin: 20px 160px;
`

export function(props : HeaderProps){
    return(
        <header>
            <div></div>
            <div></div>
        </header>
    )
}