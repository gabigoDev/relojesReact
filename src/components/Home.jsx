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
                            src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/794b413f-6839-4ced-a0b2-05a1023cb488___d0f862cb03e0641c8d6ad6b8998b2950.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/d3ec9436-2a3b-454e-809d-c0fc1199e5a8___a3457e190bddf0be60d0de4ebfc80837.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/adc073e6-2700-48c5-a255-6d523b12bff3___c4c8a9b81cc6dd76b829be475c457a03.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <hr />
            <div>
                <img
                    className="img-fluid"
                    src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/91c0392a-11a9-49aa-97aa-356a5ff72baa___78be1fc5eb0249d940ad7687e53f78d3.jpg"
                    alt=""
                />
            </div>
            <hr />
            <section class="container p-3 mb-2">
                <div class="row">
                    <h2 class="col titulosSeccion">Destacados para vos.</h2>
                </div>
                <div class="row g-2">
                    <div class="col-12 col-md-4 mb-3 p-3 card">
                        <div class="card-body">
                            <h3 class="card-title tipografia">
                                {" "}
                                Reloj de mujer Tommy Hilfiger 1781970.
                            </h3>
                            <p class="card-text">
                                Este elegante reloj, con correa de acero
                                inoxidable y esfera rosada, sofisticará tus
                                atuendos deportivos o informales. Resistente al
                                agua hasta 3 ATM / 30 metros.
                            </p>
                        </div>
                        <img
                            class="card-img-bottom"
                            src="https://stylewatchio.vtexassets.com/arquivos/ids/167103-500-auto?v=1752413629&width=500&height=auto&aspect=true"
                            alt="reloj Tommy"
                        />
                    </div>
                    <div class="col-12 col-md-4 mb-3 card p-3">
                        <div class="card-body">
                            <h3 class="card-title tipografia">
                                Reloj Swatch SKIN CLASSIC BIOCERAMIC.
                            </h3>
                            <p class="card-text tipografia">
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
                        <img
                            class="card-img-bottom"
                            src="https://stylewatchio.vtexassets.com/arquivos/ids/218259-500-auto?v=1752417169&width=500&height=auto&aspect=true"
                            alt="reloj Swatch"
                        />
                    </div>
                    <div class="col-12 col-md-4 mb-3 card p-3">
                        <div class="card-body">
                            <h3 class="card-title tipografia">
                                Reloj Bulova Marine Star.
                            </h3>
                            <p class="card-text tipografia">
                                Movimiento cronógrafo de 6 manecillas. Caja y
                                hebilla en acero con acabado dorado. Correa
                                especial de piel y caucho, con pespuntes en rojo
                                al contraste. Bisel interno unidireccional de
                                tiempo transcurrido.
                            </p>
                        </div>
                        <img
                            class="card-img-bottom"
                            src="https://stylewatchio.vtexassets.com/arquivos/ids/175289-500-auto?v=1752102263&width=500&height=auto&aspect=true"
                            alt="reloj Bulova"
                        />
                    </div>
                </div>
                <div>
                    <img
                    className="img-fluid"
                        src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/52d4e2dc-c170-4635-a589-3e63fcaf9528___6daa3d5093a9356c51b07ce9b0b01169.jpg"
                        alt=""
                    />
                </div>
                <hr />
                <div>
                    <img
                    className="img-fluid"
                        src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/7d0a4c0d-8929-4d97-bf6c-e0a8e97a5b3c___bc4225d4fdeb91b171101efde4f8f297.jpg"
                        alt="Medios de pago"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
