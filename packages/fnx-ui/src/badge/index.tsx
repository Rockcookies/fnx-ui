import React, { CSSProperties } from 'react';
import configComponentProps from '../hooks/config-component-props';
import { classnames, createBEM } from '../utils/namespace';
import { BadgeProps } from './interface';

const NS = 'fnx-badge';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<BadgeProps, 'showZero' | 'max' | 'position'>>
>({
	showZero: true,
	max: 99,
	position: 'top-right',
});

const Badge: React.FC<BadgeProps> = (_props) => {
	const [
		{
			showZero,
			max,
			position,

			...restProps
		},
		{ color, dot, count, offset, className, children, style },
	] = useProps(_props);

	const renderCount = () => {
		if (
			!dot &&
			count != null &&
			(showZero || (count !== 0 && count !== '0'))
		) {
			if (max != null && typeof count === 'number' && count > max) {
				return `${max}+`;
			}

			return count;
		}
	};

	const renderBadge = () => {
		const formatStyle = (): CSSProperties | undefined => {
			const formattedStyle: CSSProperties = {
				background: color,
			};

			if (offset) {
				const [x, y] = offset;

				if (children) {
					formattedStyle.top = `${-y}px`;

					if (typeof x === 'number') {
						formattedStyle.right = `${-x}px`;
					} else {
						formattedStyle.right = x.startsWith('-')
							? `${x.replace('-', '')}px`
							: `-${x}px`;
					}
				} else {
					formattedStyle.marginTop = `${y}px`;
					formattedStyle.marginLeft = `${x}px`;
				}
			}

			return { ...formattedStyle, ...style };
		};

		return (
			<span
				className={classnames(
					bem([
						position,
						{
							dot,
							fixed: children,
						},
					]),
					className,
				)}
				style={formatStyle()}
				{...restProps}
			>
				{renderCount()}
			</span>
		);
	};

	if (children) {
		return (
			<div className={bem('wrapper')}>
				{children}
				{renderBadge()}
			</div>
		);
	}

	return renderBadge();
};

Badge.displayName = 'Badge';

export type {
	BadgeComponentProps,
	BadgePosition,
	BadgeProps,
} from './interface';

export default Badge;
