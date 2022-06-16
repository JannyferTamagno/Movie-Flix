import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import api from "../../services/api";
import './style.css'
import { toast } from "react-toastify";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"3e4fbc6ef2fea74e1fbbe552660c2fbc",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('filme não encontrado')
                navigate("/",{ replace: true })
                return;
            })
        }
        loadFilmes();

        return ()=> {
            console.log( "componente foi desmontado" )
        }

    },[id, navigate])


    function salvarFilme(){
        const minhaLista = localStorage.getItem("@movieflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

        if (hasFilme) {
            toast.warn("Esse filme já está na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@movieflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso")
    }


    if(loading){
        return(
            <div className="filme-info">
            <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} /10 </strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external noreferrer" href={`https://youtube.com/results?search_query=${filme.title} Trailer`} >Trailer</a>
                </button>
            </div>
        </div>
    );
}

export default Filme;
