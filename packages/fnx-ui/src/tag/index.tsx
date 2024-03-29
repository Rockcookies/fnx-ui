import React, {
	CSSProperties,
	forwardRef,
	useContext,
	useImperativeHandle,
	useRef,
} from 'react';
import ConfigProvider from '../config-provider';
import { DEFAULT_CONFIG_CONTEXT } from '../config-provider/context';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import useMergedProp from '../hooks/use-merged-prop';
import Icon from '../icon';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { ReactCSSTransition } from '../utils/react';
import { TagProps } from './interface';

const NS = 'fnx-tag';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<TagProps, 'type' | 'size' | 'closeable' | 'onClose'>>
>({
	type: 'default',
	size: 'md',
	closeable: false,
	onClose: noop,
});

const Tag = forwardRef<HTMLSpanElement, TagProps>((_props, ref) => {
	const configContext = useContext(ConfigProvider.Context);

	const rootRef = useRef<HTMLSpanElement | null>(null);

	const [
		{ type, size, closeable, onClose },
		{
			color,
			textColor,
			visible: _visible,
			theme,
			closeIcon,
			className,
			style,
			children,
			transitionDuration: _transitionDuration,
			...restProps
		},
	] = useProps(_props);

	useImperativeHandle<HTMLSpanElement | null, HTMLSpanElement | null>(
		ref,
		() => rootRef.current,
	);

	const transitionDuration = useMergedProp(
		configContext.transitionDuration,
		_transitionDuration,
	);

	const { value: visible, onChangeRef } = useControlledState({
		defaultValue: true,
		value: _visible,
		onChange: (v) => {
			if (!v) {
				onClose();
			}
		},
	});

	const formatStyle = (): CSSProperties => {
		const formattedStyle: CSSProperties = {};

		if (theme === 'plain') {
			formattedStyle.color = textColor || color;
			formattedStyle.borderColor = color;
		} else {
			formattedStyle.color = textColor;
			formattedStyle.backgroundColor = color;
		}

		if (
			transitionDuration != null &&
			transitionDuration !== DEFAULT_CONFIG_CONTEXT.transitionDuration
		) {
			formattedStyle.transitionDuration = `${transitionDuration}ms`;
		}

		return { ...formattedStyle, ...style };
	};

	return (
		<ReactCSSTransition
			classNames="fnx-fade"
			in={visible}
			timeout={transitionDuration || 0}
			nodeRef={rootRef}
			unmountOnExit={true}
		>
			<span
				{...restProps}
				className={classnames(
					bem({
						[type]: true,
						[size]: size !== 'md',
						...(theme != null ? { [theme]: true } : {}),
					}),
					className,
				)}
				style={formatStyle()}
				ref={rootRef}
			>
				{children}
				{closeable && (
					<span
						className={bem('close')}
						onClick={(e) => {
							e.stopPropagation();
							onChangeRef.current(false);
						}}
					>
						{closeIcon || <Icon name="cross" />}
					</span>
				)}
			</span>
		</ReactCSSTransition>
	);
});

Tag.displayName = 'Tag';

export type {
	TagComponentProps,
	TagProps,
	TagSize,
	TagTheme,
	TagType,
} from './interface';

export default Tag;
