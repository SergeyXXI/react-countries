import { useState, useEffect } from "react";

const mq = window.matchMedia("(max-width: 767px)");

export const useMQ = () =>
{
    const [perPage, setPerPage] = useState(mq.matches ? 12 : 24);

    useEffect(() =>
    {
        mq.onchange = e => setPerPage(e.matches ? 12 : 24);                   

        return () => mq.onchange = null;
    }, []);

    return perPage;
}