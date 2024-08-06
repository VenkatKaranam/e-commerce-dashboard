export type Statistic = {
    iconUrl: string,
    name: string,
    value: string,
    type: 'loss' | 'profit',
    percent: string
}

export type Option = {
    iconUrl: string,
    name: string,
}

export type Order = {
    profileUrl: string,
    name: string,
    orderNo: number,
    amount: number,
    status: 'Delivered' | 'Cancelled' | 'Pending'
}

export type Feedback = {
    profileUrl: string,
    name: string,
    rating: number,
    feedback: string
}