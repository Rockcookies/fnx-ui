import React, { CSSProperties } from 'react';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import Icon from '../icon';
import { addUnit } from '../utils/format';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { SwitchProps } from './interface';

const NS = 'fnx-switch';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<SwitchProps, 'disabled' | 'defaultChecked' | 'loading' | 'onClick'>
	>
>({
	disabled: false,
	defaultChecked: false,
	loading: false,
	onClick: noop,
});

const Switch = createForwardRef<HTMLDivElement, SwitchProps>(
	'Switch',
	(_props, ref) => {
		const [
			{ disabled, defaultChecked, loading, onClick },
			{
				size,
				checkedColor,
				unCheckedColor,
				checkedChildren,
				unCheckedChildren,
				checked: _checked,
				onChange: _onChange,
				className,
				style,
				...restProps
			},
		] = useProps(_props);

		const { value: checked, onChangeRef } = useControlledState<boolean>({
			value: _checked,
			defaultValue: defaultChecked,
			onChange: _onChange,
		});

		const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
			if (disabled || loading) {
				return;
			}

			const nextChecked = !checked;

			onChangeRef.current(nextChecked);
			onClick(nextChecked, e);
		};

		const formatStyle = (): CSSProperties => {
			const formattedStyle: CSSProperties = {
				fontSize: addUnit(size),
				backgroundColor: checked ? checkedColor : unCheckedColor,
			};

			return { ...formattedStyle, ...style };
		};

		return (
			<div
				role="switch"
				className={classnames(
					bem({
						on: checked,
						loading,
						disabled,
					}),
					className,
				)}
				style={formatStyle()}
				tabIndex={disabled ? undefined : 0}
				aria-checked={checked}
				onClick={handleClick}
				ref={ref}
				{...restProps}
			>
				<span className={bem('handle')}>
					{loading && (
						<Icon.Spinner
							className={bem('loading')}
							color={checked ? checkedColor : unCheckedColor}
						/>
					)}
				</span>
				<span className={bem('inner')}>
					<span className={bem('children')}>
						{checked ? checkedChildren : unCheckedChildren}
					</span>
				</span>
			</div>
		);
	},
);

export type { SwitchComponentProps, SwitchProps } from './interface';

export default Switch;
