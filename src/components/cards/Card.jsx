import CardStyle from './card.module.scss';

const Card = ({ data }) => {
    return (
        <>
            {data.map((item) => {
                return (
                    <div className={CardStyle.card} id={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt="" />
                        <div className={CardStyle.desc}>
                            <p>
                                total length: <span>{item.totalLength} </span>{' '}
                            </p>
                            <p>
                                length between siyahs:{' '}
                                <span>{item.lengthBetweenSiyahs} </span>
                            </p>
                            <p>
                                length strung: <span>{item.lengthStrung} </span>
                            </p>
                            <p>
                                draw weight: <span>{item.drawWeight} </span>
                            </p>
                            <p>
                                max. draw length:{' '}
                                <span>{item.maxDrawLength} </span>
                            </p>
                            <p>
                                brace height: <span>{item.braceHeight} </span>
                            </p>
                        </div>

                        <div className={CardStyle.btn}>
                            <button>Add to Cart</button>
                            <span>{item.price}</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Card;
