export interface CardLead {
    title: string
    color: string
    count: string
}

export const statusLeadList: CardLead[] = [
    {
        title: "Горячие",
        color: "red",
        count: "5"
    },
    {
        title: "Теплые",
        color: "orange",
        count: "10"
    },
    {
        title: "Холодные",
        color: "blue",
        count: "20"
    },
    {
        title: "Все лиды",
        color: "grey",
        count: "35"
    },
]