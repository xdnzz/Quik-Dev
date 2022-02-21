import { useEffect, useState } from 'react';
import * as F from './style';
import Modal from 'react-modal';
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

Modal.setAppElement("#root");

export default function Feed(){

    var dataStorageArray = [];
    const [data, setData] = useState([]);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalEditComent, setModalEditComent] = useState(false);
    const [inputValor, setInputValor] = useState('');
    const [inputSetado, setInputSetado] = useState([]);
    const [valueIdComent, setValueIdComent] = useState(1);

    useEffect(()=>{
        function callData(){
        window.FakerApi.post('/posts', {})
        .then(res => setData(res.data))
        }

        callData();
    }, [handleSubmit])

    useEffect(()=>{
    const getData = localStorage.getItem('Post');
    dataStorageArray.push(getData);
    }, []);


function editarPostagem(e){
    setModalEdit(true)
    localStorage.setItem('key', e)    
}

function editarComentario(e, data){
    setModalEditComent(true)
    localStorage.setItem('postkey', data)
    localStorage.setItem('keycoment', e)    
}

function handleSubmit(e){
    e.preventDefault();
    const titleId = document.getElementById('titulopostagem');
    const title = e.target.title.value
    const content = e.target.content.value;
    const contentId = document.getElementById('conteudopostagem')
    if(!title || !content) {
        alert('Preencha todos os campos para publicar');
        return;
    }
    window.FakerApi.post('/posts/create', {
        title:title,
        content:content,
    })

    titleId.value='';
    contentId.value='';

}

function finalizarSetagemDados(){
    const key = localStorage.getItem('key');
    const converter = parseInt(key)
    const titleLocal = localStorage.getItem('title');
    const contentLocal = localStorage.getItem('content');
    window.FakerApi.put('/posts/update', 
    { post_id: converter, post: { 
        title: titleLocal, 
        content:contentLocal 
    }
})
}

    function finalizarSetagemDadosComent(){
    const postagem = localStorage.getItem('postkey');
    const key = localStorage.getItem('keycoment');
    const converter = parseInt(key);
    const converterPost = parseInt(postagem)
    const conteudo = localStorage.getItem('novocomentario');
    if(!conteudo) {
        alert('Preencha o novo comentário');
        return;
    }
    //Como está na API: FakerApi.put('/comments/update', { post_id: 1, comment_id: 1, post: { content:'Comentario atualizado' } })
    //Também nao foi possível simular de forma sucetível a remoçao do post pelo tutorial passado, já que retorna um erro pois api nao retorna um ID para o comentário de forma dinamica
    window.FakerApi.put('/comments/update', 
    {post_id: converterPost, comment_id: converter, comment: {content:conteudo}});
    setValueIdComent(valueIdComent + 1)
    
}

function handleSubmitEdit(e){
    e.preventDefault();
    const title = e.target.titleEdit.value
    const content = e.target.contentEdit.value
    if(!title || !content) {
        alert('Preencha todos os campos');
        return;
    }
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
    finalizarSetagemDados()
    setModalEdit(false)
}

function handleSubmitEditComent(e){
    e.preventDefault();
    const comentario = e.target.comentarioname.value
    localStorage.setItem('novocomentario', comentario);
    finalizarSetagemDadosComent()
    setModalEditComent(false)
}

function deletePost(e){
    window.FakerApi.delete('/posts/remove', { post_id: e })
}

function closeModal(){
    const key = localStorage.getItem('key');
    const title = localStorage.getItem('title');
    const content = localStorage.getItem('content');
        window.FakerApi.put('/posts/update', 
    { post_id: key, post: { 
        title: title, 
        content:content 
    }})
    setModalEdit(false)

}

function changeInputValue(e){
    const inputValue = e.target.value
    setInputValor(inputValue);
}

function addComent(e){
    const comentId = document.getElementById('comentarioID');
    setInputSetado([...inputSetado, inputValor]);
    window.FakerApi.post('/comments/create',
     { post_id: e, comment: { content: inputValor } });
     comentId.value='';
}

function deleteComent(e,data){
    console.log(data)
    window.FakerApi.delete('/comments/remove', { post_id: data, comment_id: e})
}

function closeModalEdit(){
    setModalEditComent(false);
}

function logOut(){
    window.FakerApi.post('/logout', {});
    window.location.href="/";
}

return (
        <F.Container>
            <Modal 
            isOpen={modalEdit} 
            onRequestClose={closeModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
               <F.ModalContent>
                <h3>Editar postagem</h3>
                <form onSubmit={handleSubmitEdit}>
                    <div>
                        <label>Digite o novo título da postagem</label>
                        <input 
                        type="text" 
                        name="titleEdit" 
                        />
                    </div>
                    <div>
                        <label>Digite o novo conteúdo da postagem</label>
                        <textarea 
                        name="contentEdit" 
                        />
                    </div>
                    <button>Editar</button>
                </form>
               </F.ModalContent>
            </Modal>

            <Modal 
            isOpen={modalEditComent} 
            onRequestClose={closeModalEdit}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <F.ModalContent>
                    <h3>Editar comentário</h3>
                    <form onSubmit={handleSubmitEditComent}>
                        <div>
                            <label>Digite o novo comentario</label>
                            <textarea
                            id="areacoment"
                            name="comentarioname" 
                            />
                        </div>
                            <button>Editar</button>
                    </form>
                </F.ModalContent>
            </Modal>

            <F.PubliContent>
            <F.HeaderTitle>
                <h1>Criar nova puplicação</h1> 
                <button onClick={logOut}>Log out</button>
            </F.HeaderTitle>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título da postagem</label>
                    <input 
                    type="text" 
                    name="title" 
                    id="titulopostagem"
                    />
                </div>
                <div>
                    <label>Conteúdo</label>
                    <textarea 
                    className='inputContent'
                    name="content" 
                    id="conteudopostagem"
                    />
                </div>
                <div className='designButton'>
                <button>Publicar</button>
                </div>
            </form>
            </F.PubliContent>
            {data.map((e)=>{
                return <F.Content key={e.id}>
                    <F.PublishedContent>
                    <span>Título da postagem:</span>
                    <p>{e.title}</p>
                    <span>Conteúdo:</span>
                    <p>{e.content}</p>
                    </F.PublishedContent>
                        <F.Icons>
                            <FaRegEdit 
                            onClick={()=>editarPostagem(e.id)}
                            style={{cursor:'pointer'}}
                            /> <label style={{marginRight:'20px'}}>Editar publicação</label>
                            <FiTrash
                            onClick={()=>deletePost(e.id)}
                            style={{cursor:'pointer'}}
                            /> <label>Deletar publicação</label>
                        </F.Icons>
                    <F.CommentSection>
                        <h3>Comentários</h3>
                         {e.comments?.map((c)=>{
                            return <div key={c.id}>
                                    {c.content}
                                        <F.ButtonComents>
                                       <FaRegEdit
                                       onClick={()=>editarComentario(c.id, e.id)}
                                       style={{cursor:'Pointer'}}
                                       /> <label style={{marginRight:'20px'}}>Editar</label>
                                       <FiTrash 
                                       onClick={()=>deleteComent(c.id, e.id)}
                                       style={{cursor:'Pointer'}}
                                       /><label>Excluir</label>
                                   </F.ButtonComents>
                                    </div>
                        })}
                    </F.CommentSection>
                    <F.comentButtonSection>
                    <textarea onChange={changeInputValue} id="comentarioID" type="text"/>
                    <button onClick={()=>addComent(e.id)}>Comentar</button>
                    </F.comentButtonSection>
                </F.Content>
            })}
        </F.Container>
    )
}