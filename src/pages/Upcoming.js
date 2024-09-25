import Grid from "../components/Grid/Grid"

const Upcoming = () => {
    return (
        <>
            <section className="home">
                <h2>Upcoming</h2>
                <Grid
                    url='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                />
            </section>
        </>
    )
}
export default Upcoming