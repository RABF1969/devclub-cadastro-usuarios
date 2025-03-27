import  Styled  from 'styled-components';


export const Container = Styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
paddding: 20px;
`

export const Title = Styled.h2`
color: #fff;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600;
margin-top: 40px;
`

export const ContainerUsers = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 40px 0;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
`

export const CardUsers = Styled.div`
background-color: #252d48;
padding: 16px;
border-radius: 32px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
max-width: 400px;

h3 {
  color: #fff;
  font-size: 24px; 
  text-transform: capitalize;  
}

p {
  color: #fff;
  font-size: 14px;  
  font-weight: 200;
}
`

export const TrashIcon = Styled.img`
cursor: pointer;
padding-left: 30px;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.5;
}
`

export const AvatarUser = Styled.img`
height: 80px;
`