import {css} from 'lit-element';

export class Styling {
    static get theme() {

        // language=CSS
        return css`
            :host {

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary-light: #2267A3;
                --primary: #025297;
                --primary-dark: #014178;
                --primary-variant: #BDD1E1;
                --on-primary: #ffffff;

                --secondary-light: #fdd756;
                --secondary: #fecf2f;
                --secondary-dark: #ffc911;
                --secondary-variant: #faedc1;
                --on-secondary: #212121;

                --accent-light: #ecf3ca;
                --accent: #cce35b;
                --accent-dark: #bada18;
                --on-accent: #212121;

                --background: #ffffff;
                --on-background: #212121;

                --surface-light: #f3f3f3;
                --surface: #f6f6f6;
                --surface-dark: #bdbdbd;
                --on-surface: #212121;
                --separator: #E4E4E4;

                /* Input, Forms, Toast*/
                --error: #ea1c24;
                --on-error: #ffffff;

                --danger-light: #f5c4c6;
                --danger: #ee5e63;
                --danger-dark: #ea1c24;
                --on-danger: #212121;

                --success: #129991;
                --on-success: #202124;

                --disabled: #c3c4c3;
                --on-disabled: #585858;


                /* Spacing */
                --spacing-xxs: 4px;
                --spacing-xs: 8px;
                --spacing-s: 12px;
                --spacing: 16px;
                --spacing-m: 16px;
                --spacing-l: 24px;
                --spacing-xl: 40px;
                --spacing-xxl: 48px;
                --spacing-2xl: 56px;
                --spacing-3xl: 64px;

                --split-master-width: 320px;
                --furo-card-background: var(--background);
                --furo-app-drawer-backdrop: rgba(55, 55, 55, 0.5);
                --furo-data-table-select-color: var(--surface-light);
                --furo-data-table-background: white;


                --input-hint-color: var(--primary);
                /*--input-label-color:*/
                /*--input-label-float-color:*/
                /*--input-active-float-label-color:*/
                /*--input-activation-indicator-color:*/
                /*--input-error-activation-indicator-color:*/
                /*--input-error-text-color:*/
                /*--input-active-activation-indicator-color:*/
                /*--input-active-error-activation-indicator-color:*/
            }

 

        `;
    }
}
