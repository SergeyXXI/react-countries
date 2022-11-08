import { Axios } from 'axios';
import { api as API } from "config";

type Status = "idle" | "loading" | "received" | "rejected";

type Extra = 
{
    client: Axios,
    api: typeof API
};

export { type Extra, type Status };