import './ServiceItem.scss';

export const ServiceItem = ({ item }) => {
    return (
        <div class="service-item position-relative">
            <div class="icon">
                {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
        </div>
    )
}