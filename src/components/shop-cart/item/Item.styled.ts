import styled from "styled-components";

export const Wrapper = 

styled.div`
dispaly:flex;
justify-content;
flex-direction:colum;
width:100%;
border:1px solid #00b09b;
border-radius:20px;
height:100%;



button{
border-radius: 0 0 20px 20px;
background:linear-gradient(to right,#00b09b,#96c93d);
color:#fff
}
button:hover{
background:#050;
    
}
img{
    max-height:200px;
    max-width:150px;
    object-fit: cover;
    border-radius:20px 20px 0 0;
    padding:15px 0px 0px 30px;

}
img:hover {
	opacity: 1;
	-webkit-animation: flash 1.5s;
	animation: flash 1.5s;
}
@-webkit-keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
@keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
div{
    padding:1rem;
    height:100%;
}
`;