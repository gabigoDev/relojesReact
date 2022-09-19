import Carousel from "react-bootstrap/Carousel";
const Home = () => {
    return (
        <section>
            <h1 className="text-center tipografia">Bienvenido</h1>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/794b413f-6839-4ced-a0b2-05a1023cb488___d0f862cb03e0641c8d6ad6b8998b2950.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p>
                        
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/d3ec9436-2a3b-454e-809d-c0fc1199e5a8___a3457e190bddf0be60d0de4ebfc80837.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p>
                        
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/adc073e6-2700-48c5-a255-6d523b12bff3___c4c8a9b81cc6dd76b829be475c457a03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p>
                            
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Home;
