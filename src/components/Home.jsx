import Carousel from "react-bootstrap/Carousel";

const Home = () => {
    return (
        <>
            <section>
                <h1 className="text-center tipografia">Bienvenido</h1>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/imagenes/allDiaHome/carrouselUno.jpg"
                            alt="reloj"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/imagenes/allDiaHome/carrouselDos.jpg"
                            alt="reloj"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/imagenes/allDiaHome/carrouselTres.jpg"
                            alt="reloj"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <hr />
            <div>
                <img
                    className="img-fluid"
                    src="/imagenes/allDiaHome/imgBulova.jpg"
                    alt=""
                />
            </div>
            <hr />
            <section className="container p-3 mb-2">
                <div className="row">
                    <h2 className="col titulosSeccion text-center tipografia">
                        Destacados para vos.
                    </h2>
                </div>
                <div className="row g-2">
                    <div className="col-12 col-md-4 mb-3 p-3 card">
                        <div className="card-body">
                            <h3 className="card-title tipografia">
                                {" "}
                                Reloj de mujer Tommy Hilfiger 1781970.
                            </h3>
                            <img
                                className="card-img-bottom"
                                src="/imagenes/allDiaHome/cardUno.jpg"
                                alt="reloj Tommy"
                            />
                            <p className="card-text">
                                Este elegante reloj, con correa de acero
                                inoxidable y esfera rosada, sofisticará tus
                                atuendos deportivos o informales. Resistente al
                                agua hasta 3 ATM / 30 metros.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 card p-3">
                        <div className="card-body">
                            <h3 className="card-title tipografia">
                                Reloj Swatch SKIN CLASSIC BIOCERAMIC.
                            </h3>
                            <img
                                className="card-img-bottom"
                                src="/imagenes/allDiaHome/cardDos.jpg"
                                alt="reloj Swatch"
                            />
                            <p className="card-text tipografia">
                                La esfera de este reloj Swatch SKIN CLASSIC
                                BIOCERAMIC de color rosa pastel está diseñada
                                con un cristal hecho con materiales de origen
                                biológico y un estampado rosa. La caja de
                                BIOCERAMIC, en color rosa mate sólido, está
                                colocada sobre una correa hecha con materiales
                                de origen biológico de color rosa mate y hebilla
                                de plástico.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 card p-3">
                        <div className="card-body">
                            <h3 className="card-title tipografia">
                                Reloj Bulova Marine Star.
                            </h3>
                            <img
                                className="card-img-bottom"
                                src="/imagenes/allDiaHome/cardTres.jpg"
                                alt="reloj Bulova"
                            />
                            <p className="card-text tipografia">
                                Movimiento cronógrafo de 6 manecillas. Caja y
                                hebilla en acero con acabado dorado. Correa
                                especial de piel y caucho, con pespuntes en rojo
                                al contraste. Bisel interno unidireccional de
                                tiempo transcurrido.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="/imagenes/allDiaHome/imgTommy.jpg"
                        alt=""
                    />
                </div>
                <hr />
                <div>
                    <img
                        className="img-fluid"
                        src="/imagenes/allDiaHome/imgPagos.jpg"
                        alt="Medios de pago"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
