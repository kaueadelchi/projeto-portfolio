import TopographicLines from "../components/TopographicLines";
import "./Guilhi.css";

function App() {
    return (
        <div className="guilhi-page relative w-screen h-screen overflow-hidden">
            <TopographicLines />

            {/* GIF Superior Esquerdo */}
            <img
                src={`${import.meta.env.BASE_URL}projects/guili-dance.gif`}
                alt=""
                className="absolute top-8 left-8 w-32 h-32 object-contain"
            />

            {/* GIF Superior Direito */}
            <img
                src={`${import.meta.env.BASE_URL}projects/guili-dance.gif`}
                alt=""
                className="absolute top-8 right-8 w-32 h-32 object-contain"
            />

            {/* GIF Inferior Esquerdo */}
            <img
                src={`${import.meta.env.BASE_URL}projects/guili-dance.gif`}
                alt=""
                className="absolute bottom-8 left-8 w-32 h-32 object-contain"
            />

            {/* GIF Inferior Direito */}
            <img
                src={`${import.meta.env.BASE_URL}projects/guili-dance.gif`}
                alt=""
                className="absolute bottom-8 right-8 w-32 h-32 object-contain"
            />

            {/* Texto central */}
            <div className="absolute inset-0 flex items-center justify-center gap-1 pointer-events-none">
                <h1
                    className="
                    text-[#313739]
                    text-6xl
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    drop-shadow-lg
                    "
                >
                    TROCANDO DE JOGO
                </h1>

                <img
                    src={`${import.meta.env.BASE_URL}projects/guilhi-andando.gif`}
                    alt=""
                    className="w-32 h-32 object-contain scale-x-[-1]"
                />
            </div>
        </div>
    );
}

export default App;