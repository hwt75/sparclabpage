import { useState } from "react"

export const ReasonItem = ({data}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`reason-item ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
            <div className="reason-title">
                <i class={`bi ${!open ? "bi-chevron-down" : "bi-chevron-up"}`}></i>
                <h5>{data.title}</h5>
            </div>
            <p className="reason-desc">{data.desc}</p>
        </div>
    )
}