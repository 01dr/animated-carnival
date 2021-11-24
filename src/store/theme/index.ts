import { createEffect, createEvent, createStore } from 'effector';
import React from 'react';
import { Theme } from '../../types';

export const THEME_STORAGE_KEY = 'theme';

export const $theme = createStore<Theme>(Theme.light);
export const $isDark = $theme.map(theme => theme === Theme.dark);

export const toggleTheme = createEvent<React.SyntheticEvent>();

export const saveThemeFx = createEffect<Theme, void>();
export const loadThemeFx = createEffect<void, Theme>();