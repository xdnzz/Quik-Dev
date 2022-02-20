import styled from 'styled-components';


export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;


export const Content = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;

img {
    margin: 10px;
}

a {
    margin: 20px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

h1 {
            margin: 10px;
        }

div {
    display: flex;
    flex-direction: column;
}



form {
    display: flex;
    flex-direction: column;
    align-items: center;

    

        label {
            font-size: 25px;
        }

        input {
            width: 400px;
            height: 35px;
            border-radius: 0.25rem;
            border: 0.1px solid #d7e8d5;
            padding: 20px;
            font-size: 15px;
        }

        button {
        cursor: pointer;
        width: 200px;
        height: 30px;
        margin-top: 10px;
        border: none;
        border-radius: 0.25rem;
        background-color: #423383;
        color: #fff;
    }     

  
}



`;