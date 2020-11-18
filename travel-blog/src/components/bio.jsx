import headshot from '../images/headshot.jpg';


function Bio() {
    return (
        <section className="author-bio">
            <div className="author-image">
                <img src={headshot} alt="Hero" />
            </div>
            <div className="author-info">
                <h1 className="author-info-title">
                    A little about me
                </h1>
                <p className="author-info-paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, tempora laboriosam autem voluptatum voluptates veritatis necessitatibus explicabo expedita ea quia praesentium sunt ipsa quam aperiam adipisci, debitis laudantium, cum vero?
                </p>
                <p className="author-info-paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, tempora laboriosam autem voluptatum voluptates veritatis necessitatibus explicabo expedita ea quia praesentium sunt ipsa quam aperiam adipisci, debitis laudantium, cum vero?
                </p>
                <p className="author-info-paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, tempora laboriosam autem voluptatum voluptates veritatis necessitatibus explicabo expedita ea quia praesentium sunt ipsa quam aperiam adipisci, debitis laudantium, cum vero?
                </p>
            </div>
        </section>
    );
}

export default Bio;
