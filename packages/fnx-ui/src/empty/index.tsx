import React from 'react';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import EmptyImage from './EmptyImage';
import { EmptyProps } from './interface';

const NS = 'fnx-empty';
const bem = createBEM(NS);

const Empty = createForwardRef<HTMLDivElement, EmptyProps>(
	'Empty',
	({ image, title, description, className, children, ...restProps }, ref) => {
		const renderImage = () => {
			if (image === null || image === false) {
				return;
			}

			const element =
				typeof image === 'string' ? (
					<img src={image} />
				) : (
					image || <EmptyImage />
				);

			return <div className={bem('image')}>{element}</div>;
		};

		return (
			<div
				className={classnames(bem(), className)}
				{...restProps}
				ref={ref}
			>
				{renderImage()}
				{(title || description) && (
					<div className={bem('content')}>
						{title && <div className={bem('title')}>{title}</div>}
						{description && (
							<div
								className={bem('description', {
									'has-title': title,
								})}
							>
								{description}
							</div>
						)}
					</div>
				)}
				{children && <div className={bem('children')}>{children}</div>}
			</div>
		);
	},
);

export type { EmptyComponentProps, EmptyProps } from './interface';

export default Empty;
