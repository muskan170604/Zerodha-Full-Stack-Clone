const Hero = () => {
return (
    <section className="container-fluid" id="supportHero">
        <div className="row mt-5 p-3 text-center" id="supportWrapper">
            <h3>Support Portal</h3>
            <a style={{textDecoration:"none" , color:"white"}} href="">Track Tickets</a>
        </div>
        <div className="row p-3 my-5">
            <div className="col-6 p-3 ">
            <h1>Search for an answer or browse help topics to create a ticket</h1>
            <input type="text" placeholder="Eg. how do I active F&0"/><br /><br />
            <a style={{textDecoration:"none" , color:"white"}} href="">Track <br />account opening</a>
            <a style={{textDecoration:"none" ,color:"white"}} href="">Track <br />segment activation</a>
            <a style={{textDecoration:"none",color:"white"}} href="">Intraday <br />margins</a>
            <a style={{textDecoration:"none",color:"white"}} href="">Kite <br />user manual</a>
            </div>
            <div className="col-6 p-5 ">
            <h1>Featured</h1>
            <ol>
                <li><a style={{color:"white" , textDecoration:"none"}}  href="">Current BuyBacks - August 2024</a></li>
                <li><a style={{color:"white" , textDecoration:"none"}} href="">Latest Intraday Leverages and Square-off timings</a></li>
            </ol>
            </div>
        </div>
    </section>
)}

export default Hero