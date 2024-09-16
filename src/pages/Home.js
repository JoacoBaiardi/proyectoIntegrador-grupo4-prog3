import Grid from "../components/Grid/Grid"

const Home = () => {
    return (
        <>
            <h1>My App in React</h1>
            <section>
                <Grid
                    title="Popular"
                    url='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
                />
                <Grid 
                    title = "Upcoming"
                    url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'/>

            </section>
        </>
        
    )
}
export default Home