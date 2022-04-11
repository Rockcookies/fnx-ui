import React, { ReactNode, SVGAttributes } from 'react';
import { addUnit } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { IconProps } from './interface';

export const NS = 'fnx-icon';
export const bem = createBEM(NS);

export const DEFAULT_SVG_PROPS: SVGAttributes<any> = {
	width: '1em',
	height: '1em',
	fill: 'currentColor',
	'aria-hidden': true,
	focusable: false,
};

export const DEFAULT_SVG_VIEW_BOX = '0 0 1024 1024';

// https://www.iconfont.cn/collections/detail?cid=31945

export const DEFAULT_ICONS: Dictionary<ReactNode> = {
	'arrow-up': (
		<path d="M525.492224 291.8912a42.467328 42.467328 0 0 1 20.504576 11.394048L887.92064 645.211136c16.662528 16.661504 16.662528 43.676672 0 60.3392s-43.677696 16.662528-60.3392 0L515.698688 393.66656 203.86304 705.502208c-16.662528 16.661504-43.677696 16.661504-60.3392 0-16.662528-16.662528-16.662528-43.677696 0-60.340224L485.44768 303.236096c10.860544-10.860544 26.120192-14.642176 40.04352-11.343872z"></path>
	),
	'arrow-down': (
		<path d="M505.952256 751.028224a42.467328 42.467328 0 0 1-20.503552-11.393024L143.52384 397.709312c-16.662528-16.661504-16.662528-43.676672 0-60.3392 16.661504-16.662528 43.676672-16.662528 60.3392 0L515.74784 649.253888 827.582464 337.41824c16.661504-16.662528 43.676672-16.662528 60.3392 0s16.662528 43.677696 0 60.340224L545.9968 739.683328c-10.861568 10.861568-26.120192 14.6432-40.044544 11.34592z"></path>
	),
	'arrow-left': (
		<path d="M303.220736 520.22784c-3.29728-13.923328 0.484352-29.182976 11.344896-40.04352l341.925888-341.925888c16.661504-16.662528 43.676672-16.662528 60.3392 0s16.662528 43.677696 0 60.340224L404.996096 510.43328l311.883776 311.883776c16.662528 16.662528 16.662528 43.677696 0 60.340224s-43.677696 16.662528-60.340224 0L314.614784 540.731392a42.467328 42.467328 0 0 1-11.394048-20.503552z"></path>
	),
	'arrow-right': (
		<path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z"></path>
	),
	success: (
		<path d="M122.28096 536.623104c-9.940992-9.925632-11.548672-25.360384-2.78528-36.407296l20.487168-25.828352c8.397824-10.58816 24.108032-13.246464 35.211264-5.835776l177.3312 118.35904c9.353216 6.243328 25.452544 5.430272 34.185216-1.654784l468.5824-380.16c10.532864-8.54528 27.030528-7.817216 36.261888 1.400832l11.542528 11.52512c10.04544 10.03008 9.314304 25.951232-1.215488 36.465664l-502.92736 502.183936c-15.64672 15.624192-41.337856 14.94016-57.445376-1.142784l-219.22816-218.9056z"></path>
	),
	cross: (
		<path d="M573.592576 513.252352l261.472256 261.472256c16.662528 16.662528 16.662528 43.677696 0 60.340224s-43.677696 16.662528-60.340224 0L513.252352 573.592576 251.78112 835.064832c-16.662528 16.662528-43.677696 16.662528-60.3392 0-16.662528-16.662528-16.662528-43.677696 0-60.340224l261.472256-261.472256L191.440896 251.78112c-16.662528-16.662528-16.662528-43.677696 0-60.3392 16.661504-16.662528 43.676672-16.662528 60.3392 0l261.472256 261.472256 261.472256-261.472256c16.662528-16.662528 43.677696-16.662528 60.340224 0 16.662528 16.661504 16.662528 43.676672 0 60.3392L573.592576 513.252352z"></path>
	),
	plus: (
		<path d="M550.4 550.4v332.8c0 21.20704-17.19296 38.4-38.4 38.4s-38.4-17.19296-38.4-38.4v-332.8h-332.8c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h332.8v-332.8c0-21.20704 17.19296-38.4 38.4-38.4s38.4 17.19296 38.4 38.4v332.8h332.8c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z"></path>
	),
	minus: (
		<path d="M550.4 550.4h-409.6c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h742.4c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z"></path>
	),
	fail: (
		<path d="M455.12192 128.99328c-0.187392-8.402944 5.812224-15.215616 14.620672-15.215616h84.514816c8.262656 0 14.81728 6.38976 14.620672 15.21664l-12.035072 538.456064c-0.187392 8.403968-7.324672 15.21664-15.03744 15.21664h-59.611136c-8.117248 0-14.839808-6.38976-15.03744-15.21664L455.12192 128.99328zM512 853.334016c-31.418368 0-56.889344-25.469952-56.889344-56.88832 0-31.419392 25.470976-56.889344 56.889344-56.889344s56.889344 25.469952 56.889344 56.889344c0 31.418368-25.470976 56.88832-56.889344 56.88832z"></path>
	),
	circle: (
		<path d="M512 903.110656c216.004608 0 391.110656-175.106048 391.110656-391.110656S728.004608 120.889344 512 120.889344 120.889344 295.995392 120.889344 512 295.995392 903.110656 512 903.110656z m0 64C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"></path>
	),

	// ---- outline
	'close-o': (
		<>
			<path d="M511.65696 471.998464l140.791808-140.792832c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816L551.882752 512.22528l140.792832 140.792832c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.108352 11.108352-29.118464 11.108352-40.226816 0L511.65696 552.452096 370.864128 693.244928c-11.108352 11.108352-29.118464 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.118464 0-40.226816L471.42912 512.22528 330.637312 371.432448c-11.108352-11.108352-11.108352-29.118464 0-40.226816 11.108352-11.108352 29.118464-11.108352 40.226816 0l140.792832 140.792832z"></path>
			<path d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"></path>
		</>
	),
	'star-o': (
		<path d="M720.692224 636.6976l170.748928-191.096832-250.462208-54.23616L512 169.920512 383.021056 391.364608l-250.462208 54.23616 170.748928 191.096832-25.81504 254.963712L512 788.32128l234.507264 103.340032-25.81504-254.963712zM512 850.48832L255.744 963.412992c-14.37696 6.335488-31.16544-0.183296-37.499904-14.558208a28.444672 28.444672 0 0 1-2.270208-14.336l28.208128-278.60992L57.6 447.08864c-10.468352-11.71456-9.45664-29.696 2.25792-40.163328a28.444672 28.444672 0 0 1 12.932096-6.588416l273.690624-59.267072 140.941312-241.98144c7.906304-13.574144 25.320448-18.168832 38.895616-10.262528a28.444672 28.444672 0 0 1 10.262528 10.262528l140.941312 241.98144 273.690624 59.267072c15.353856 3.323904 25.105408 18.465792 21.78048 33.819648a28.444672 28.444672 0 0 1-6.58944 12.93312L779.81696 655.906816l28.208128 278.60992c1.583104 15.629312-9.8048 29.58336-25.434112 31.16544-4.89472 0.495616-9.833472-0.28672-14.336-2.271232L512 850.489344z"></path>
	),
	'file-o': (
		<path d="M625.777664 886.670336V739.555328h147.115008L625.77664 886.67136z m-398.222336 23.552V113.77664h568.889344v568.889344H625.77664c-31.459328 0-56.88832 25.428992-56.88832 56.88832V910.22336H227.555328zM796.444672 56.889344H227.555328c-31.459328 0-56.88832 25.428992-56.88832 56.88832V910.22336c0 31.459328 25.428992 56.88832 56.88832 56.88832h374.67136a56.83712 56.83712 0 0 0 40.219648-16.667648l40.220672-40.220672 113.77664-113.777664 40.221696-40.220672c10.694656-10.638336 16.667648-25.145344 16.667648-40.220672v-602.22464c0-31.460352-25.428992-56.889344-56.88832-56.889344z m-142.22336 170.672128H369.778688c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.443648 28.444672 28.443648H654.22336c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672m0 113.77664H369.77664c-15.700992 0-28.444672 12.74368-28.444672 28.445696 0 15.700992 12.74368 28.443648 28.444672 28.443648H654.22336c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672M540.444672 455.1168H369.77664c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672h170.667008c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.702016-12.74368-28.444672-28.444672-28.444672"></path>
	),

	// ---- filled
	close: (
		<path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m180.675584 274.316288c-11.108352-11.108352-29.118464-11.108352-40.226816 0L511.65696 471.998464 370.864128 331.205632c-11.108352-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.118464 0 40.226816L471.42912 512.22528 330.637312 653.018112c-11.108352 11.108352-11.108352 29.118464 0 40.226816 11.108352 11.108352 29.118464 11.108352 40.226816 0l140.792832-140.792832 140.791808 140.792832c11.108352 11.108352 29.118464 11.108352 40.226816 0 11.108352-11.108352 11.108352-29.118464 0-40.226816L551.882752 512.22528l140.792832-140.792832c11.108352-11.108352 11.108352-29.118464 0-40.226816z"></path>
	),
	star: (
		<path d="M512 837.213184L255.744 950.136832c-14.37696 6.334464-31.16544-0.18432-37.499904-14.559232a28.444672 28.444672 0 0 1-2.270208-14.336l28.208128-278.60992L57.6 433.814528c-10.468352-11.71456-9.45664-29.696 2.25792-40.163328a28.444672 28.444672 0 0 1 12.932096-6.58944l273.690624-59.267072 140.941312-241.98144c7.906304-13.574144 25.320448-18.168832 38.895616-10.262528a28.444672 28.444672 0 0 1 10.262528 10.263552l140.941312 241.98144 273.690624 59.266048c15.353856 3.324928 25.105408 18.466816 21.78048 33.819648a28.444672 28.444672 0 0 1-6.58944 12.93312L779.81696 642.63168l28.208128 278.60992c1.583104 15.629312-9.8048 29.582336-25.434112 31.164416-4.89472 0.495616-9.833472-0.28672-14.336-2.270208L512 837.21216z" />
	),
	photo: (
		<>
			<path d="M312.916992 284.422144c-47.104 0-85.332992 38.228992-85.332992 85.332992s38.228992 85.332992 85.332992 85.332992 85.334016-38.228992 85.334016-85.332992-38.230016-85.332992-85.334016-85.332992m356.665344 51.10784c-22.868992-26.73664-64.340992-26.452992-86.868992 0.626688L341.332992 625.77664l-73.499648-73.556992c-22.244352-22.243328-58.25536-22.243328-80.498688 0l-73.556992 73.556992V227.555328H910.22336v388.721664l-240.64-280.745984z m240.64-164.864H113.77664c-31.403008 0-56.88832 25.430016-56.88832 56.889344v568.88832c0 31.403008 25.485312 56.889344 56.88832 56.889344H910.22336c31.459328 0 56.88832-25.486336 56.88832-56.88832V227.555328c0-31.459328-25.428992-56.88832-56.88832-56.88832z"></path>
		</>
	),
	'photo-fail': (
		<path d="M398.678016 171.008l-18.944 56.889344H114.233344v398.222336l73.556992-73.556992c20.532224-20.533248 52.795392-22.112256 75.132928-4.739072l5.36576 4.739072 73.499648 73.556992 105.35936-126.464L569.344 683.008l-56.889344 170.667008h-398.22336c-29.159424 0-53.21728-21.97504-56.505344-50.25792L57.344 796.786688V227.897344c0-29.212672 21.97504-53.225472 50.25792-56.507392l6.631424-0.381952h284.444672z m512 0c29.212672 0 53.225472 21.925888 56.507392 50.24768l0.381952 6.641664v568.889344c0 29.159424-21.925888 53.21728-50.24768 56.506368l-6.641664 0.382976H626.233344L683.122688 683.008 510.350336 423.822336l72.818688-87.324672c21.025792-25.273344 58.554368-27.206656 82.05824-5.612544l4.810752 4.98688 240.64 280.747008V227.897344H493.51168l18.944-56.889344h398.22336zM313.372672 284.763136c15.880192 0 30.75072 4.344832 43.48928 11.90912l-15.07328 45.002752 46.368768 69.533696c-14.528512 26.354688-42.58304 44.22144-74.784768 44.22144-47.104 0-85.332992-38.228992-85.332992-85.334016 0-47.104 38.228992-85.332992 85.332992-85.332992z" />
	),
};

const Icon = createForwardRef<HTMLSpanElement, IconProps>(
	'Icon',
	(props, ref) => {
		const {
			className,
			name,
			component,
			spin,
			children,
			viewBox,
			size,
			color,
			style,
			...rest
		} = props;

		const SvgComponent: any = component;

		let icon: ReactNode;

		if (SvgComponent) {
			icon = (
				<SvgComponent
					{...DEFAULT_SVG_PROPS}
					viewBox={viewBox || DEFAULT_SVG_VIEW_BOX}
				/>
			);
		} else if (children) {
			icon = (
				<svg
					{...DEFAULT_SVG_PROPS}
					viewBox={viewBox || DEFAULT_SVG_VIEW_BOX}
				>
					{children}
				</svg>
			);
		} else if (name) {
			const elements = DEFAULT_ICONS[name];

			if (elements) {
				icon = (
					<svg {...DEFAULT_SVG_PROPS} viewBox={DEFAULT_SVG_VIEW_BOX}>
						{elements}
					</svg>
				);
			}
		}

		return (
			<span
				className={classnames(bem({ spin }), className)}
				{...rest}
				style={{ color, fontSize: addUnit(size), ...style }}
				ref={ref}
			>
				{icon}
			</span>
		);
	},
);

export default Icon;
