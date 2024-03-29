import { ReactNode, HTMLAttributes } from 'react';

export type BadgePosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

export type BadgeProps = BadgeComponentProps &
	Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;

export interface BadgeComponentProps {
	count?: ReactNode;
	showZero?: boolean;
	dot?: boolean;
	max?: number;
	color?: string;
	offset?: [number | string, number | string];
	position?: BadgePosition;
}
