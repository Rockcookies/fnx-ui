import { HTMLAttributes } from 'react';

export interface SkeletonComponentProps {
	title?: boolean;
	titleWidth?: string | number;
	avatar?: boolean;
	avatarSize?: string | number;
	avatarShape?: 'round' | 'square';
	row?: number;
	rowWidth?: Array<string | number> | string | number;
	round?: boolean;
	loading?: boolean;
	animate?: boolean;
}

export type SkeletonProps = SkeletonComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;
