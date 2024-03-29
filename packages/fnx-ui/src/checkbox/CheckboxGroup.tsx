import React, {
	forwardRef,
	ReactElement,
	useCallback,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import { ForwardRefProps } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { CheckGroupContext } from './context';
import {
	CheckboxGroupProps,
	CheckboxGroupRef,
	CheckboxValue,
} from './interface';

const NS = 'fnx-checkbox-group';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<CheckboxGroupProps, 'defaultValue'>>
>({
	defaultValue: [],
});

const InternalCheckboxGroup = forwardRef<CheckboxGroupRef, CheckboxGroupProps>(
	(_props, ref) => {
		const [
			{ defaultValue },
			{
				value: _value,
				onChange: _onChange,
				disabled,
				direction,
				iconSize,
				iconPosition,
				iconShape,
				iconCheckedColor,
				labelDisabled,
				icon,
				checkedIcon,
				maxCheckedCount,
				className,
				children,
				...resetProps
			},
		] = useProps(_props);

		const { value, onChangeRef } = useControlledState<CheckboxValue[]>({
			value: _value,
			defaultValue,
			onChange: _onChange,
		});

		const registeredValuesRef = useRef<CheckboxValue[]>([]);

		const cancelValue = useCallback((val: CheckboxValue) => {
			registeredValuesRef.current = registeredValuesRef.current.filter(
				(v) => v !== val,
			);
		}, []);

		const registerValue = useCallback((val: CheckboxValue) => {
			registeredValuesRef.current.push(val);
		}, []);

		const toggleValue = useCallback(
			(isCheck: boolean, val: CheckboxValue) => {
				const newValue = [...value];
				const optionIndex = newValue.indexOf(val);

				if (
					isCheck &&
					maxCheckedCount &&
					newValue.length >= maxCheckedCount
				)
					return;

				if (
					isCheck &&
					optionIndex === -1 &&
					(maxCheckedCount == null ||
						newValue.length < maxCheckedCount)
				) {
					newValue.push(val);
				}

				if (!isCheck) {
					newValue.splice(optionIndex, 1);
				}

				const nextValue = newValue.filter(
					(val) => registeredValuesRef.current.indexOf(val) !== -1,
				);

				onChangeRef.current(nextValue);
			},
			[maxCheckedCount, onChangeRef, value],
		);

		const elementRef = useRef<HTMLDivElement>(null);

		const checkboxGroupRef = useMemo<CheckboxGroupRef>(() => {
			return {
				element: elementRef.current,
				toggleAll: (options) => {
					let nextCheckedValues = [...registeredValuesRef.current];

					const isCheckAll = options && options.checkAll;

					if (!isCheckAll) {
						nextCheckedValues = [
							...registeredValuesRef.current,
						].filter((v) => value.indexOf(v) === -1);
					}

					onChangeRef.current(nextCheckedValues);
				},
			};
		}, [onChangeRef, value]);

		useImperativeHandle<CheckboxGroupRef, CheckboxGroupRef>(
			ref,
			() => checkboxGroupRef,
			[checkboxGroupRef],
		);

		return (
			<div
				className={classnames(
					bem({
						...(direction != null
							? { [direction]: direction !== 'vertical' }
							: {}),
					}),
					className,
				)}
				{...resetProps}
				ref={elementRef}
			>
				<CheckGroupContext.Provider
					value={{
						value,
						disabled,
						direction,
						iconSize,
						iconPosition,
						iconShape,
						iconCheckedColor,
						labelDisabled,
						icon,
						checkedIcon,
						registerValue,
						cancelValue,
						toggleValue,
					}}
				>
					{children}
				</CheckGroupContext.Provider>
			</div>
		);
	},
);

InternalCheckboxGroup.displayName = 'CheckboxGroup';

const CheckboxGroup = InternalCheckboxGroup as <
	T extends CheckboxValue = CheckboxValue,
>(
	props: ForwardRefProps<CheckboxGroupProps<T>, CheckboxGroupRef>,
) => ReactElement;

export default CheckboxGroup;
