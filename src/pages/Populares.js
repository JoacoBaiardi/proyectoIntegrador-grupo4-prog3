import Grid from "../components/Grid/Grid"

const Populares = () => {
    return (
        <>
            <section className="home">
                <h2>Popular</h2>
                <Grid
                    url='https://api.themoviedb.org/3/movie/popular?language=en-US'
                />
            </section>
        </>
        
    )
}
export default Populares