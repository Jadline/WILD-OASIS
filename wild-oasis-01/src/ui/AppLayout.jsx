import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import styled from "styled-components"
const Main = styled.main`
    background-color : var(--color-grey-50);
    padding :4rem 4.8rem 6.4rem;
   
    
`
const StyledAppLayout = styled.div`
   display: grid;
    height: 100vh;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  
   

`
const Container = styled.div`
    max-width : 100%;
    margin : 0 auto;
   
`
function AppLayout(){
    return(
        <StyledAppLayout>
            <Header/>
            <Sidebar/>
            <Main>
            <Outlet/>
            </Main>
        </StyledAppLayout>
    )
}
export default AppLayout