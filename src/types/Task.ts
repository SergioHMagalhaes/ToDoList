export interface ITask {
	id: number;
	title: string;
	isCompleted: boolean;
}


export interface ITaskList {
	tasks: ITask[];
}