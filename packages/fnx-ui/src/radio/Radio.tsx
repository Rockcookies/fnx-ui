import { useContext } from 'react';
import useCheckboxRender from '../checkbox/hooks/use-checkbox-render';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import useDefaults from '../hooks/use-defaults';
import { createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { RadioGroupContext } from './context';
import { RadioProps } from './interface';

const NS = 'fnx-radio';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<RadioProps, 'defaultChecked' | 'skipGroup'>>
>({
	defaultChecked: false,
	skipGroup: false,
});

const Radio = createForwardRef<HTMLDivElement, RadioProps>(
	'Radio',
	(_props, ref) => {
		const [
			{ defaultChecked, skipGroup },
			{
				checked: _checked,
				value: radioValue,
				onChange: _onChange,
				...resetProps
			},
		] = useProps(_props);

		const groupContext = useContext(RadioGroupContext);

		const { value: checked, onChangeRef } = useControlledState<boolean>({
			value:
				groupContext.onChange != null && !skipGroup
					? groupContext.value === radioValue
					: _checked,
			defaultValue: skipGroup ? false : defaultChecked,
			onChange: _onChange,
		});

		const disabled = useDefaults<boolean>(
			false,
			resetProps.disabled,
			groupContext.disabled,
		);

		const render = useCheckboxRender(
			{
				role: 'radio',
				...resetProps,
				onClick: (e) => {
					if (!disabled) {
						if (
							!skipGroup &&
							groupContext.onChange != null &&
							radioValue != null
						) {
							if (groupContext.value !== radioValue) {
								groupContext.onChange(radioValue);
							}
						} else {
							!checked && onChangeRef.current(true);
						}
					}

					resetProps.onClick && resetProps.onClick(e);
				},
			},
			groupContext,
		);

		return render({
			bem,
			checked,
			ref: ref as any,
		});
	},
);

export default Radio;
