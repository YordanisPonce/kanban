export interface Task {
    title: string,
    description: string,
    user_id: number | undefined,
    board_id: number,
    status: number,
}
