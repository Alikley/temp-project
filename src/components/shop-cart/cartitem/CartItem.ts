
import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid lightblue;
    padding-bottom:20px;

    div{
        flex:1;
    }
    h3{
        width:350px;
    }

    .information .buttons{
    display:flex;
    justify-content: space-between;
    transform:translateX(30px)

    }
    .information .buttons2{
        display:flex;
        justify-content: space-between;
        transform:translateX(20px)
        }

    img{
        max-width:200px;
        max-height:100px;
        object-fit:cover;
        padding:20px;
    }
`;