import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;


`;

export const Content = styled.div`
display: flex;
flex-direction: column;
margin:10px 0 100px 0;
width: 700px;
padding: 20px;
border-radius: 0.25rem;
border: 0.1px solid #d7e8d5;
`;

export const HeaderTitle = styled.div`

display: flex;
flex-direction: row;
align-items: center;

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

`;

export const PubliContent = styled.div`
display: flex;
padding: 10px;
border: 0.1px solid #d7e8d5;
border-radius: 0.25rem;
width: 500px;
flex-direction: column;
justify-content: center;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    button {
        width: 120px;
    }

    input, textarea {
            border-radius: 0.25rem;
            border: 0.1px solid #d7e8d5;
            padding: 5px;
            font-size: 15px;
            resize: none;
    }
    .inputContent {
     height: 300px;
     margin-bottom: 10px;
    }

    .designButton {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        
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

export const Icons = styled.div`
display: flex;
align-items: center;
justify-content: end;
`;

export const PublishedContent = styled.div`
padding: 10px;
border-radius: 0.25rem;
border: 0.1px solid #d7e8d5;
margin-bottom: 30px;
span {
    color: grey
}
`;

export const CommentSection = styled.section`

div {
padding: 10px;
border-radius: 0.25rem;
border: 0.1px solid #d7e8d5;
margin-bottom: 30px;
}
`;

export const ButtonComents = styled.section`
display: flex;
align-items: center;
justify-content: end;
`;

export const comentButtonSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

textarea {
    width: 650px;
    resize: none;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 0.25rem;
    border: 0.1px solid #d7e8d5;
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

`;


export const ModalContent = styled.div`
height: 100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    div {
        display: flex;
        flex-direction: column;
        textarea {
            resize: none;
            height: 150px;
            border-radius: 0.25rem;
             border: 0.1px solid #d7e8d5;
        }

        input {
            border-radius: 0.25rem;
            border: 0.1px solid #d7e8d5;
        }
        
    }
`;

export const ModalContentComents = styled.div`
display: flex;
flex-direction: row;
`;

