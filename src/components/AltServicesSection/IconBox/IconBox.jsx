import './IconBox.scss'

export const IconBox = ({ item, borderBottom }) => {
    return (
        <div class= {`icon-box d-flex position-relative ${borderBottom && "border-bottom"}`} data-aos="fade-up" data-aos-delay="100">
            {item.icon}
            <div>
                <h4><a href={item.link || ""} class="stretched-link">{item.title}</a></h4>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}