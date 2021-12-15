/* eslint-disable react/display-name */
import React, { HTMLAttributes, ReactElement, RefObject } from 'react';
import useDefaults from '../../hooks/use-defaults';
import Icon from '../../icon';
import { preventDefault } from '../../utils/dom/event';
import { addUnit } from '../../utils/format';
import { BEM, classnames } from '../../utils/namespace';
import { CheckboxBaseProps } from '../interface';

interface RenderOptions {
	bem: BEM;
	checked?: boolean;
	ref?: RefObject<HTMLDivElement>;
}

export default function useCheckboxRender(
	{
		disabled: _disabled,
		direction: _direction,
		iconSize: _iconSize,
		iconPosition: _iconPosition,
		iconShape: _iconShape,
		iconCheckedColor: _iconCheckedColor,
		labelDisabled: _labelDisabled,
		icon: _icon,
		checkedIcon: _checkedIcon,
		className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & CheckboxBaseProps,
	context: Partial<CheckboxBaseProps>,
): (o: RenderOptions) => ReactElement {
	const disabled = useDefaults(false, _disabled, context.disabled);
	const direction = useDefaults('vertical', _direction, context.direction);
	const iconSize = useDefaults(undefined, _iconSize, context.iconSize);
	const iconPosition = useDefaults(
		'left',
		_iconPosition,
		context.iconPosition,
	);

	const iconShape = useDefaults<string>(
		'round',
		_iconShape,
		context.iconShape,
	);
	const iconCheckedColor = useDefaults(
		undefined,
		_iconCheckedColor,
		context.iconCheckedColor,
	);
	const labelDisabled = useDefaults(
		false,
		_labelDisabled,
		context.labelDisabled,
	);
	const icon = _icon ? _icon : context.icon;
	const checkedIcon = _checkedIcon ? _checkedIcon : context.checkedIcon;

	return ({ bem, checked, ref }: RenderOptions): ReactElement => {
		let color: string | undefined;

		if (!disabled && iconShape !== 'plain' && checked) {
			color = iconCheckedColor;
		}

		const renderIcon = () => {
			return (
				<span
					className={bem('icon', {
						[iconShape]: iconShape !== 'plain',
						checked,
						disabled,
					})}
					style={{
						fontSize: addUnit(iconSize),
						borderColor: color,
						backgroundColor: color,
					}}
				>
					{checked
						? checkedIcon || <Icon name="success" />
						: icon || <Icon name="success" />}
				</span>
			);
		};

		const renderLabel = () => {
			return (
				<span
					className={bem('label', { disabled })}
					onClick={(e) => {
						labelDisabled && preventDefault(e, true);
					}}
				>
					{children}
				</span>
			);
		};

		return (
			<div
				className={classnames(
					bem({
						disabled,
						[`${direction}`]: direction !== 'vertical',
						'label-disabled': labelDisabled,
					}),
					className,
				)}
				tabIndex={disabled ? undefined : 0}
				aria-checked={checked}
				{...restProps}
				ref={ref}
			>
				{iconPosition === 'left' ? renderIcon() : renderLabel()}
				{iconPosition === 'left' ? renderLabel() : renderIcon()}
			</div>
		);
	};
}
