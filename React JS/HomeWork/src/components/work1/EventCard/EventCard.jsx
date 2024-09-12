import style from "./eventCard.module.css";

function EventCard({card}) {

    return ( <section className="card">
        <div className={style.card__box}>
            <h3 className={style.card__title}>{card.title}</h3>
            <p className={style.card__date}>{card.date}</p>
            <p className={style.card__place}>{card.place}</p>
        </div>
    </section> );
}

export default EventCard;