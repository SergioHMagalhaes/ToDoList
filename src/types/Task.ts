export interface ITask {
	id: string;
	title: string;
	isCompleted: boolean;
}


export interface ITaskList {
	tasks: ITask[];
	onDeleteTask: (taskId: string) => void;
	onCompleteTask: (taskId: string) => void;
}