import React, { lazy } from 'react';
import { Dictionary } from '../src/utils/interface';

export const DEMO_DATA: Dictionary<React.LazyExoticComponent<any>> = {
	badge: lazy(() => import('../src/badge/demos/basic')),
	button: lazy(() => import('../src/button/demos/basic')),
	icon: lazy(() => import('../src/icon/demos/basic')),
	cell: lazy(() => import('../src/cell/demos/basic')),
	checkbox: lazy(() => import('../src/checkbox/demos/basic')),
	circle: lazy(() => import('../src/circle/demos/basic')),
	layout: lazy(() => import('../src/col/demos/basic')),
	collapse: lazy(() => import('../src/collapse/demos/basic')),
	overlay: lazy(() => import('../src/overlay/demos/basic')),
	popup: lazy(() => import('../src/popup/demos/basic')),
	loading: lazy(() => import('../src/loading/demos/basic')),
	toast: lazy(() => import('../src/toast/demos/basic')),
	image: lazy(() => import('../src/image/demos/basic')),
	list: lazy(() => import('../src/list/demos/basic')),
	'pull-refresh': lazy(() => import('../src/pull-refresh/demos/basic')),
	swipe: lazy(() => import('../src/swipe/demos/basic')),
	sticky: lazy(() => import('../src/sticky/demos/basic')),
	pagination: lazy(() => import('../src/pagination/demos/basic')),
	skeleton: lazy(() => import('../src/skeleton/demos/basic')),
	switch: lazy(() => import('../src/switch/demos/basic')),
	stepper: lazy(() => import('../src/stepper/demos/basic')),
	uploader: lazy(() => import('../src/uploader/demos/basic')),
	tag: lazy(() => import('../src/tag/demos/basic')),
	divider: lazy(() => import('../src/divider/demos/basic')),
	grid: lazy(() => import('../src/grid/demos/basic')),
	tabs: lazy(() => import('../src/tabs/demos/basic')),
	picker: lazy(() => import('../src/picker/demos/basic')),
	rate: lazy(() => import('../src/rate/demos/basic')),
	radio: lazy(() => import('../src/radio/demos/basic')),
	dialog: lazy(() => import('../src/dialog/demos/basic')),
	cascader: lazy(() => import('../src/cascader/demos/basic')),
	'notice-bar': lazy(() => import('../src/notice-bar/demos/basic')),
	field: lazy(() => import('../src/field/demos/basic')),
	'date-picker': lazy(() => import('../src/date-picker/demos/basic')),
	form: lazy(() => import('../src/form/demos/basic')),
	'error-boundary': lazy(() => import('../src/error-boundary/demos/basic')),
	calendar: lazy(() => import('../src/calendar/demos/basic')),
	notify: lazy(() => import('../src/notify/demos/basic')),
	'config-provider': lazy(() => import('../src/config-provider/demos/basic')),
	empty: lazy(() => import('../src/empty/demos/basic')),
	space: lazy(() => import('../src/space/demos/basic')),
};
