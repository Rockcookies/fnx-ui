import React, { forwardRef } from 'react';
import { classnames, createBEM } from '../utils/namespace';
import EmptyImage from './EmptyImage';
import { EmptyProps } from './interface';

const NS = 'fnx-empty';
const bem = createBEM(NS);

const Empty = forwardRef<HTMLDivElement, EmptyProps>(
	(
		{
			image,
			imageProps,
			title,
			description,
			className,
			children,
			...restProps
		},
		ref,
	) => {
		const renderImage = () => {
			if (image === false) {
				return;
			}

			if (image == null || typeof image === 'string') {
				return (
					<div className={bem('image')}>
						{image == null ? (
							<EmptyImage />
						) : (
							<img {...imageProps} src={image} />
						)}
					</div>
				);
			} else {
				return image;
			}
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

Empty.displayName = 'Empty';

export type { EmptyComponentProps, EmptyProps } from './interface';

export default Empty;
