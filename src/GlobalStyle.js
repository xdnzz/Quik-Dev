import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';



export const GlobalStyle = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Poppins:wght@400;600&display=swap');
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace; */
    font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
}

.react-modal-overlay {
background: rgba(0,0,0, 0.5);
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
}

.react-modal-content {
width: 100%;
max-width: 576px;
background: #fff;
padding: 3rem;
border-radius: 0.25rem;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

